import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  fallback?: string;
}

const ImageWithFallback = ({
  src,
  fallback = 'https://i.ibb.co/pb7f3ZC/image.png',
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback);
      }}
      blurDataURL={imgSrc}
    />
  );
};
export default ImageWithFallback;
