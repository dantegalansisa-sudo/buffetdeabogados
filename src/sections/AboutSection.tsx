import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const reasons = [
  {
    num: '01',
    title: 'Experiencia & Excelencia',
    desc: 'Más de 25 años resolviendo casos complejos con resultados comprobados.',
  },
  {
    num: '02',
    title: 'Enfoque Personalizado',
    desc: 'Cada cliente recibe atención directa y una estrategia a su medida.',
  },
  {
    num: '03',
    title: 'Comunicación Transparente',
    desc: 'Te mantenemos informado en cada etapa de tu proceso legal.',
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section
      id="nosotros"
      ref={ref}
      style={{ background: 'var(--bg-black)', padding: '130px 0' }}
    >
      <div
        className="container about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '55% 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — text */}
        <div>
          <SectionLabel text="POR QUÉ NOSOTROS" inView={inView} />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.9, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 300,
              letterSpacing: 'var(--track-display)',
              lineHeight: 1.1,
              color: 'var(--text-white)',
              marginBottom: '32px',
            }}
          >
            Por Qué Elegir
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Matos Mejía & Asoc.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '17px',
              color: 'var(--text-off)',
              lineHeight: 1.9,
              marginBottom: '48px',
              maxWidth: '500px',
            }}
          >
            Somos un bufete con raíces en Azua, República Dominicana, comprometidos
            con la justicia y la defensa integral de los derechos de cada cliente.
            Nuestra trayectoria habla por sí sola.
          </motion.p>

          {/* Reason cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.8, ease }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                  borderLeft: '2px solid var(--gold)',
                  borderRadius: '2px',
                  padding: '32px 28px',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--gold-light)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--gold)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '36px',
                      color: 'var(--gold)',
                      lineHeight: 1,
                      opacity: 0.5,
                      minWidth: '40px',
                    }}
                  >
                    {r.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '20px',
                        color: 'var(--text-white)',
                        marginBottom: '8px',
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        fontSize: '15px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1, ease }}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              right: '-16px',
              bottom: '-16px',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              pointerEvents: 'none',
            }}
          />
          <img
            src="/teams.jpeg"
            alt="Equipo Matos Mejía & Asoc."
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: '2px',
              boxShadow: 'var(--shadow-dark)',
              position: 'relative',
              display: 'block',
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
