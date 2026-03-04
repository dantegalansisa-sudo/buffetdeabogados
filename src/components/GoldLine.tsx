import { motion } from 'framer-motion'

interface GoldLineProps {
  width?: string
  delay?: number
  centered?: boolean
}

export default function GoldLine({ width = '120px', delay = 0, centered = false }: GoldLineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 1.2, ease: 'easeInOut' }}
      style={{
        height: '1px',
        background: 'var(--gold)',
        width,
        transformOrigin: centered ? 'center' : 'left',
        margin: centered ? '0 auto' : undefined,
      }}
    />
  )
}
