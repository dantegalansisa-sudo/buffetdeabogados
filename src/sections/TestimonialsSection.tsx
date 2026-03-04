import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const testimonials = [
  {
    text: 'Matos Mejía & Asoc. resolvieron mi caso de manera profesional y transparente. Su experiencia y dedicación marcaron la diferencia. Totalmente recomendados.',
    name: 'Carlos R.',
    role: 'Cliente — Derecho Civil',
  },
  {
    text: 'Excelente equipo de abogados. Me acompañaron en cada etapa del proceso con claridad y compromiso. En Azua, son sin duda la mejor opción legal.',
    name: 'María F.',
    role: 'Cliente — Derecho de Familia',
  },
  {
    text: '25 años de experiencia se notan en cada detalle. Mi caso inmobiliario fue resuelto con rapidez y profesionalismo. Muy agradecido con el equipo.',
    name: 'Roberto M.',
    role: 'Cliente — Derecho Inmobiliario',
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ease = [0.16, 1, 0.3, 1] as const
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      style={{ background: 'var(--bg-section)', padding: '130px 0' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel text="TESTIMONIOS" inView={inView} />
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
            }}
          >
            Lo Que Dicen
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Nuestros Clientes</em>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.9, ease }}
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-dark)',
            borderRadius: '2px',
            padding: '64px 56px',
            position: 'relative',
            minHeight: '320px',
            overflow: 'hidden',
          }}
        >
          {/* Decorative quote */}
          <span
            style={{
              position: 'absolute',
              top: '24px',
              left: '40px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '120px',
              color: 'var(--gold)',
              opacity: 0.15,
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '22px',
                  color: 'var(--text-off)',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                {testimonials[current].text}
              </p>

              {/* Gold line before name */}
              <div
                style={{
                  height: '1px',
                  width: '40px',
                  background: 'var(--gold)',
                  marginBottom: '16px',
                }}
              />

              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '14px',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.15em',
                  color: 'var(--gold)',
                  marginBottom: '4px',
                }}
              >
                {testimonials[current].name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                }}
              >
                {testimonials[current].role}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '32px',
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? 'var(--gold)' : 'var(--border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
