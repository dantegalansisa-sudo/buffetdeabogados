import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Experiencia Comprobada',
    desc: 'Más de dos décadas ejerciendo el derecho con excelencia en República Dominicana.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Trato Personalizado',
    desc: 'Cada caso es único. Diseñamos estrategias legales adaptadas a tu situación específica.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Resultados Probados',
    desc: 'Cientos de casos resueltos exitosamente en todas las áreas de práctica legal.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Confidencialidad Total',
    desc: 'Tu información está protegida. Operamos bajo los más altos estándares de ética profesional.',
  },
]

export default function WhyUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: '130px 0',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,10,0.88)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 300,
              letterSpacing: 'var(--track-display)',
              lineHeight: 1.15,
              color: 'var(--text-white)',
            }}
          >
            Más de 25 años
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>construyendo confianza.</em>
          </h2>
        </motion.div>

        {/* Grid 2x2 with cross separator */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '10%',
              bottom: '10%',
              left: '50%',
              width: '1px',
              background: 'var(--border)',
              transformOrigin: 'top',
              zIndex: 1,
            }}
            className="why-cross-v"
          />
          {/* Horizontal line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '10%',
              right: '10%',
              top: '50%',
              height: '1px',
              background: 'var(--border)',
              transformOrigin: 'center',
              zIndex: 1,
            }}
            className="why-cross-h"
          />

          <div
            className="why-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '60px',
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease }}
                style={{
                  textAlign: 'center',
                  padding: '40px 24px',
                }}
              >
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '22px',
                    color: 'var(--text-white)',
                    marginBottom: '12px',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '15px',
                    color: 'var(--text-off)',
                    lineHeight: 1.8,
                    maxWidth: '360px',
                    margin: '0 auto',
                  }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .why-cross-v, .why-cross-h { display: none !important; }
        }
      `}</style>
    </section>
  )
}
