import { motion } from 'framer-motion'

interface SectionLabelProps {
  text: string
  inView?: boolean
}

export default function SectionLabel({ text, inView = true }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          height: '1px',
          width: '40px',
          background: 'var(--gold)',
          transformOrigin: 'left',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-label)',
          fontWeight: 500,
          letterSpacing: 'var(--track-label)',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}
      >
        {text}
      </span>
    </motion.div>
  )
}
