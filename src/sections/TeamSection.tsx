import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const teamMembers = [
  {
    name: 'Lic. Ana Lucia Matos Mejía',
    role: 'SOCIA FUNDADORA',
    image: '/Lic. Ana Lucia Matos Mejía.jpeg',
    instagram: '@mmyasoc',
  },
  {
    name: 'Dr. Eulises Cabrera',
    role: 'SOCIO',
    image: '/Dr. Eulises Cabrera.jpeg',
    instagram: '@mmyasoc',
  },
  {
    name: 'Lic. Milvio Perez Caro',
    role: 'SOCIO',
    image: '/Lic. Milvio Perez Caro.jpeg',
    instagram: '@mmyasoc',
  },
  {
    name: 'Sr. Leonardo Mazara',
    role: 'ASOCIADO',
    image: '/Sr. Leonardo Mazara.jpeg',
    instagram: '@mmyasoc',
  },
  {
    name: 'Sr. Thony De Moya',
    role: 'ASOCIADO',
    image: '/Sr. Thony De Moya.jpeg',
    instagram: '@mmyasoc',
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section
      id="equipo"
      ref={ref}
      style={{ background: 'var(--bg-black)', padding: '130px 0' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <SectionLabel text="NUESTRO EQUIPO" inView={inView} />
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
            Los Socios de
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Matos Mejía & Asoc.</em>
          </motion.h2>
        </div>

        {/* Grid */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '32px',
          }}
        >
          {teamMembers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.9, ease }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{
                cursor: 'default',
                position: 'relative',
              }}
            >
              {/* Image container */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  marginBottom: '20px',
                }}
              >
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
                    zIndex: 2,
                  }}
                  className={`team-line-${i}`}
                />
                <img
                  src={m.image}
                  alt={m.name}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'grayscale(20%)',
                    transition: 'filter 0.5s, transform 0.5s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)'
                    e.currentTarget.style.transform = 'scale(1.03)'
                    const line = e.currentTarget.parentElement?.querySelector(`[class^="team-line"]`) as HTMLElement
                    if (line) line.style.transform = 'scaleX(1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(20%)'
                    e.currentTarget.style.transform = 'scale(1)'
                    const line = e.currentTarget.parentElement?.querySelector(`[class^="team-line"]`) as HTMLElement
                    if (line) line.style.transform = 'scaleX(0)'
                  }}
                />
              </div>

              {/* Info */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'var(--text-white)',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.02em',
                  marginBottom: '6px',
                }}
              >
                {m.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: 'var(--gold)',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.2em',
                  marginBottom: '12px',
                }}
              >
                {m.role}
              </p>

              {/* Social */}
              <a
                href={`https://instagram.com/${m.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--gold)',
                  opacity: 0.6,
                  transition: 'opacity 0.3s',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                {m.instagram}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; max-width: 320px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
