'use client';

import React from 'react';
import Image from 'next/image';
import path from 'path';

interface ImageRendererProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'; // optional for Next.js < Image >
}

const ImageRenderer: React.FC<ImageRendererProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = '',
  layout,
}) => {
  const ext = path.extname(src).toLowerCase();

  const isSvg = ext === '.svg';

  if (isSvg) {
    // Use native <img> for SVG to allow styling and inline flexibility
    return <img src={src} alt={alt} width={width} height={height} className={className} />;
  }

  // Use Next.js Image component for other image formats
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      layout={layout}
    />
  );
};

export default ImageRenderer;
