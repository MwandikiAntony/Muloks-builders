import { useState } from 'react'

interface Props {
  name: string
  alt: string
  className?: string
  eager?: boolean
  fallback?: string
}

export default function Img({ name, alt, className = '', eager = false, fallback }: Props) {
  const [src, setSrc] = useState(`/images/${name}.jpg`)
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      onError={() => setSrc(`/images/${fallback ?? name}.svg`)}
    />
  )
}
