export default function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-end bg-ink p-4 text-xs uppercase tracking-widest text-white/50 ${className}`}
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  )
}
