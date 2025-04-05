"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc: string
}

export function FallbackImage({ src, fallbackSrc, alt, ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={() => setImgSrc(fallbackSrc)} />
}

