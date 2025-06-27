'use client';

import React from 'react';
import Image from 'next/image';
// Removed 'path' import: The 'path' module is a Node.js built-in
// and cannot be used in client-side browser environments.
// Next.js <Image> component can handle SVG sources directly,
// so explicit SVG detection via file extension is no longer needed
// using 'path'.

interface ImageRendererProps {
  src: string;
  alt: string;
  width?: number; // Optional: Required if fill is false, but not if fill is true.
  height?: number; // Optional: Required if fill is false, but not if fill is true.
  className?: string;
  fill?: boolean; // Controls if the image should fill its parent container.
  priority?: boolean; // Optimizes image loading for LCP (Largest Contentful Paint).
}

const ImageRenderer: React.FC<ImageRendererProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
}) => {
  // Next.js <Image /> component can handle all common image formats,
  // including SVGs, directly. This eliminates the need for a conditional
  // <img> tag and resolves the `no-img-element` ESLint warning.

  // Conditional rendering based on the 'fill' prop
  if (fill) {
    // When 'fill' is true, the <Image> component will expand to fill its
    // parent element. In this mode, 'width' and 'height' props should NOT
    // be provided directly on the <Image> component itself.
    // The parent container is responsible for defining the image's dimensions.
    return (
      <Image
        src={src}
        alt={alt}
        fill={true} // Explicitly set fill to true
        priority={priority}
        className={className}
      // You might also consider 'sizes' prop for responsive behavior
      // when using 'fill' in complex layouts.
      // e.g., sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  } else {
    // When 'fill' is false, 'width' and 'height' props are mandatory for
    // Next.js to optimize the image and prevent layout shifts.
    // We provide default values (100) if they are not explicitly passed,
    // consistent with the component's original intent.
    const finalWidth = width ?? 100;
    const finalHeight = height ?? 100;

    return (
      <Image
        src={src}
        alt={alt}
        width={finalWidth} // Pass the calculated or default width
        height={finalHeight} // Pass the calculated or default height
        priority={priority}
        className={className}
      />
    );
  }
};

export default ImageRenderer;
