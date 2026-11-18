import { useState } from 'react'
import { images } from '../data/images'

interface Props {
  name: string
  alt: string
  className?: string
  eager?: boolean
  fallback?: string
}

export default function Img({ name, alt, className = '', eager = false, fallback }: Props) {
  const remote = images[name] ?? (fallback ? images[fallback] : undefined)
  const sources = [`/images/${name}.jpg`, ...(remote ? [remote] : []), `/images/${fallback ?? name}.svg`]
  const [step, setStep] = useState(0)
  return (
    <img
      src={sources[step]}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setStep((n) => Math.min(n + 1, sources.length - 1))}
    />
  )
}
