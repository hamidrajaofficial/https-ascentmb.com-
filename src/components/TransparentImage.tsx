import React, { useEffect, useRef, useState } from 'react';

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function TransparentImage({ src, alt, className = '' }: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) {
          setIsLoaded(true);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const width = canvas.width;
        const height = canvas.height;

        // BFS Flood Fill from edges to remove only outer white/off-white background
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        // Push edge pixels to queue
        for (let x = 0; x < width; x++) {
          queue.push(x); // top row: y = 0
          queue.push((height - 1) * width + x); // bottom row
        }
        for (let y = 0; y < height; y++) {
          queue.push(y * width); // left column: x = 0
          queue.push(y * width + (width - 1)); // right column
        }

        // Check if pixel is light background (near white)
        const isBgColor = (idx: number) => {
          const r = data[idx * 4];
          const g = data[idx * 4 + 1];
          const b = data[idx * 4 + 2];
          // Near white / light gray threshold
          return r > 225 && g > 225 && b > 225 && Math.abs(r - g) < 25 && Math.abs(g - b) < 25;
        };

        let head = 0;
        while (head < queue.length) {
          const curr = queue[head++];
          if (visited[curr]) continue;
          visited[curr] = 1;

          if (isBgColor(curr)) {
            const r = data[curr * 4];
            const g = data[curr * 4 + 1];
            const b = data[curr * 4 + 2];
            const brightness = (r + g + b) / 3;

            if (brightness > 245) {
              data[curr * 4 + 3] = 0; // 100% transparent
            } else {
              // Soft edge feathering
              const alphaFactor = Math.max(0, Math.min(1, (245 - brightness) / 20));
              data[curr * 4 + 3] = Math.round(alphaFactor * 255);
            }

            const x = curr % width;
            const y = Math.floor(curr / width);

            // 4-neighbor flood fill
            if (x > 0 && !visited[curr - 1] && isBgColor(curr - 1)) queue.push(curr - 1);
            if (x < width - 1 && !visited[curr + 1] && isBgColor(curr + 1)) queue.push(curr + 1);
            if (y > 0 && !visited[curr - width] && isBgColor(curr - width)) queue.push(curr - width);
            if (y < height - 1 && !visited[curr + width] && isBgColor(curr + width)) queue.push(curr + width);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL('image/png'));
        setIsLoaded(true);
      } catch (e) {
        console.warn('Canvas background removal fallback', e);
        setIsLoaded(true);
      }
    };

    img.onerror = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
    />
  );
}
