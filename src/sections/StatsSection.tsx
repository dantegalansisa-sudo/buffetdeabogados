import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const stats = [
  { value: 25, suffix: '+', label: 'Años de Experiencia' },
  { value: 500, suffix: '+', label: 'Casos Resueltos' },
  { value: 100, suffix: '%', label: 'Compromiso Legal' },
  { value: 5, suffix: '', label: 'Especialidades' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bg-dark)',
        padding: '80px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                textAlign: 'center',
                padding: '20px 0',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
              className="stat-item"
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(42px, 5vw, 72px)',
                  color: 'var(--gold)',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '14px',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-item { border-right: none !important; padding: 24px 0 !important; }
        }
      `}</style>
    </section>
  )
}
