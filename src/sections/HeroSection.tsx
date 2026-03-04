import { useCallback, useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

/* ── Partículas doradas ────────────────────── */

function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 6,
    opacity: 0.3 + Math.random() * 0.4,
  }))
}

/* ── Balanza SVG ───────────────────────────── */

function JusticeScale({ rotate }: { rotate: ReturnType<typeof useTransform> }) {
  return (
    <motion.svg
      style={{
        rotate,
        position: 'absolute',
        right: '-5%',
        top: '10%',
        width: '420px',
        height: '420px',
        opacity: 0.12,
        pointerEvents: 'none',
      }}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pillar */}
      <rect x="97" y="40" width="6" height="130" fill="var(--gold)" rx="1" />
      {/* Base */}
      <rect x="70" y="168" width="60" height="5" fill="var(--gold)" rx="1" />
      <rect x="82" y="163" width="36" height="8" fill="var(--gold)" rx="1" />
      {/* Crossbar */}
      <rect x="30" y="48" width="140" height="3" fill="var(--gold)" rx="1" />
      {/* Top finial */}
      <circle cx="100" cy="38" r="6" fill="var(--gold)" />
      <circle cx="100" cy="38" r="3" fill="var(--bg-black, #0A0A0A)" />
      {/* Left chain */}
      <line x1="38" y1="51" x2="38" y2="90" stroke="var(--gold)" strokeWidth="1.5" />
      {/* Right chain */}
      <line x1="162" y1="51" x2="162" y2="90" stroke="var(--gold)" strokeWidth="1.5" />
      {/* Left pan */}
      <path d="M18 90 Q38 105 58 90" stroke="var(--gold)" strokeWidth="2" fill="none" />
      <line x1="18" y1="90" x2="22" y2="95" stroke="var(--gold)" strokeWidth="1.5" />
      <line x1="58" y1="90" x2="54" y2="95" stroke="var(--gold)" strokeWidth="1.5" />
      <ellipse cx="38" cy="97" rx="18" ry="5" fill="var(--gold)" opacity="0.5" />
      {/* Right pan */}
      <path d="M142 90 Q162 105 182 90" stroke="var(--gold)" strokeWidth="2" fill="none" />
      <line x1="142" y1="90" x2="146" y2="95" stroke="var(--gold)" strokeWidth="1.5" />
      <line x1="182" y1="90" x2="178" y2="95" stroke="var(--gold)" strokeWidth="1.5" />
      <ellipse cx="162" cy="97" rx="18" ry="5" fill="var(--gold)" opacity="0.5" />
    </motion.svg>
  )
}

/* ── Hero Section ──────────────────────────── */

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Parallax transforms
  const bgX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-15, 15])
  const bgY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-15, 15])
  const balanceRotate = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-8, 8])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    },
    [mouseX, mouseY]
  )

  const particles = useMemo(() => generateParticles(25), [])

  // Stagger easing
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-black)',
      }}
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          position: 'absolute',
          inset: '-30px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* ── Gradient overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.78) 40%, rgba(10,10,10,0.88) 100%)',
        }}
      />

      {/* ── Vignette edges ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 200px 60px rgba(10,10,10,0.7)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Golden particles ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: `rgba(201,168,76, ${p.opacity})`,
            animation: `gold-particle ${p.duration}s ${p.delay}s infinite ease-in-out`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      ))}

      {/* ── Justice Scale SVG ── */}
      <JusticeScale rotate={balanceRotate} />

      {/* ── Content ── */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div style={{ maxWidth: '720px' }}>
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            style={{
              display: 'inline-block',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '8px 20px',
              fontSize: '12px',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              borderRadius: '1px',
              marginBottom: '40px',
            }}
          >
            BUFETE DE ABOGADOS &middot; AZUA, REP. DOM.
          </motion.span>

          {/* Title — staggered lines */}
          <div style={{ marginBottom: '0' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-hero)',
                    fontWeight: 300,
                    letterSpacing: 'var(--track-display)',
                    lineHeight: 1.0,
                    color: 'var(--text-white)',
                    display: 'block',
                  }}
                >
                  Justicia,
                </span>
              </motion.div>
            </div>

            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease }}
              >
                <em
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-hero)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    letterSpacing: 'var(--track-display)',
                    lineHeight: 1.0,
                    color: 'var(--gold)',
                    display: 'block',
                  }}
                >
                  Experiencia
                </em>
              </motion.div>
            </div>

            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.9, ease }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-hero)',
                    fontWeight: 300,
                    letterSpacing: 'var(--track-display)',
                    lineHeight: 1.0,
                    color: 'var(--text-white)',
                    display: 'block',
                  }}
                >
                  y Resultados.
                </span>
              </motion.div>
            </div>
          </div>

          {/* Gold line reveal */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: 'easeInOut' }}
            style={{
              height: '1px',
              background: 'var(--gold)',
              width: '120px',
              transformOrigin: 'left',
              margin: '36px 0',
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--text-off)',
              lineHeight: 1.8,
              maxWidth: '520px',
              marginBottom: '40px',
            }}
          >
            Más de 25 años de experiencia ofreciendo asesoría
            legal integral en República Dominicana. Defendemos
            tus derechos con excelencia y dedicación.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease }}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
          >
            <a href="#contacto" className="btn-gold" style={{ textDecoration: 'none' }}>
              Consulta Gratuita
              <span style={{ fontSize: '16px' }}>&rarr;</span>
            </a>
            <a href="#equipo" className="btn-outline" style={{ textDecoration: 'none' }}>
              Conocer el Equipo
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-muted)',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--gold)',
            transformOrigin: 'top',
            animation: 'scroll-line 2s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* ── Bottom gold border ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--border)',
        }}
      />
    </section>
  )
}
