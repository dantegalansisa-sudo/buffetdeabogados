import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const services = [
  { icon: '\u2696\uFE0F', name: 'Derecho Civil', desc: 'Contratos, obligaciones, responsabilidad civil y disputas patrimoniales.' },
  { icon: '\uD83C\uDFDB\uFE0F', name: 'Derecho Penal', desc: 'Defensa y representación en procesos penales con experiencia comprobada.' },
  { icon: '\uD83C\uDFE0', name: 'Derecho Inmobiliario', desc: 'Compraventas, hipotecas, deslindes y litigios de propiedad.' },
  { icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', name: 'Derecho de Familia', desc: 'Divorcios, custodia, adopciones y sucesiones.' },
  { icon: '\uD83C\uDFE2', name: 'Derecho Empresarial', desc: 'Constitución de empresas, contratos comerciales y asesoría corporativa.' },
  { icon: '\uD83D\uDCCB', name: 'Asesoría Legal Integral', desc: 'Consultoría preventiva para personas y empresas en todas las áreas.' },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section
      id="servicios"
      ref={ref}
      style={{ background: 'var(--bg-section)', padding: '130px 0' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel text="ÁREAS DE PRÁCTICA" inView={inView} />
          </div>
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
              marginBottom: '24px',
            }}
          >
            Nuestras Especialidades
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Legales</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            style={{
              height: '1px',
              width: '60px',
              background: 'var(--gold)',
              margin: '0 auto',
              transformOrigin: 'center',
            }}
          />
        </div>

        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease }}
              whileHover={{
                y: -8,
                rotateY: 3,
                transition: { duration: 0.3 },
              }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px',
                padding: '40px 32px',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-dark)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(201,168,76,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.borderColor = 'var(--border-dark)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Order number */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '48px',
                  color: 'var(--gold-pale)',
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div style={{ fontSize: '36px', marginBottom: '20px' }}>{s.icon}</div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '22px',
                  color: 'var(--text-white)',
                  marginBottom: '12px',
                }}
              >
                {s.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                {s.desc}
              </p>

              {/* Bottom gold line on hover */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--gold)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                }}
                className={`service-line-${i}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
