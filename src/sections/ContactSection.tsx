import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const areaOptions = [
  'Derecho Civil',
  'Derecho Penal',
  'Derecho Inmobiliario',
  'Derecho de Familia',
  'Derecho Empresarial',
  'Asesoría General',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '1px',
  color: 'var(--text-white)',
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: '16px',
  padding: '16px 20px',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: 'var(--text-muted)',
  marginBottom: '8px',
  display: 'block',
}

function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'var(--gold)'
  e.currentTarget.style.boxShadow = '0 0 0 3px var(--gold-pale)'
}

function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
  e.currentTarget.style.boxShadow = 'none'
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ease = [0.16, 1, 0.3, 1] as const
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="contacto"
      ref={ref}
      style={{ background: 'var(--bg-black)', padding: '130px 0' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel text="CONTACTO" inView={inView} />
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
              marginBottom: '16px',
            }}
          >
            Cuéntanos Tu Caso.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Te Escuchamos.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-muted)',
            }}
          >
            Consulta inicial gratuita
          </motion.p>
        </div>

        {/* Two columns */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '56px 48px',
            }}
          >
            {/* Logo M */}
            <div style={{ marginBottom: '40px' }}>
              <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
                <polygon
                  points="20,2 37,11 37,29 20,38 3,29 3,11"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <text
                  x="20"
                  y="25"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', serif"
                  fontSize="18"
                  fontWeight="700"
                  fill="var(--gold)"
                >
                  M
                </text>
              </svg>
            </div>

            {/* Contact items */}
            {[
              {
                icon: '\uD83D\uDCCD',
                title: 'C/ Duarte Esq. 30 de Marzo',
                sub: 'Azua, República Dominicana 71000',
              },
              {
                icon: '\u2696\uFE0F',
                title: '+25 Años de Experiencia',
                sub: 'Asesoría Legal Integral',
              },
              {
                icon: '\uD83D\uDCF1',
                title: '@mmyasoc',
                sub: 'Instagram — Oficina de Abogados',
              },
            ].map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    height: '1px',
                    background: 'var(--border)',
                    margin: '24px 0',
                  }}
                />
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', lineHeight: 1.4 }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        fontSize: '15px',
                        color: 'var(--text-white)',
                        marginBottom: '4px',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ height: '1px', background: 'var(--border)', margin: '24px 0' }} />

            {/* CTA button */}
            <a
              href="https://wa.me/18090000000?text=Hola%2C%20me%20interesa%20una%20consulta%20legal%20con%20Matos%20Mej%C3%ADa%20%26%20Asoc."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center',
                marginTop: '16px',
              }}
            >
              Consulta Gratuita &rarr;
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '56px 48px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    marginBottom: '12px',
                  }}
                >
                  Mensaje Enviado
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '15px' }}>
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <div>
                  <label style={labelStyle}>Nombre completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 809-000-0000"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Área Legal</label>
                  <select
                    required
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C9A84C' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: '40px',
                    }}
                    onFocus={handleFocus as any}
                    onBlur={handleBlur as any}
                    defaultValue=""
                  >
                    <option value="" disabled style={{ color: 'var(--text-muted)' }}>
                      Selecciona un área
                    </option>
                    {areaOptions.map((a) => (
                      <option key={a} value={a} style={{ background: '#1A1A1A', color: '#F5F0E8' }}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Descripción del caso</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos brevemente tu situación..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={handleFocus as any}
                    onBlur={handleBlur as any}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '8px',
                  }}
                >
                  Enviar Consulta &rarr;
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
