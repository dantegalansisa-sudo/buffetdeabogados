import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.4s, border-bottom 0.4s, backdrop-filter 0.4s',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          {/* Hexagonal M logo */}
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
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
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: 'var(--text-white)',
              textTransform: 'uppercase' as const,
            }}
          >
            Matos Mejía <span style={{ color: 'var(--gold)' }}>&</span> Asoc.
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: 'var(--text-off)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-off)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contacto"
          className="nav-cta"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color: 'var(--gold)',
            textDecoration: 'none',
            border: '1px solid var(--gold)',
            padding: '10px 24px',
            borderRadius: '2px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.color = 'var(--bg-black)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--gold)'
          }}
        >
          Consulta Gratuita
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--gold)',
                transition: 'all 0.3s',
                transform: mobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--gold)',
                transition: 'all 0.3s',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--gold)',
                transition: 'all 0.3s',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="nav-mobile-menu"
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            background: 'rgba(10,10,10,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            padding: '32px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: 'var(--text-off)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: 'var(--bg-black)',
              textDecoration: 'none',
              background: 'var(--gold)',
              padding: '12px 32px',
              borderRadius: '2px',
              marginTop: '8px',
            }}
          >
            Consulta Gratuita
          </a>
        </motion.div>
      )}

      {/* Responsive CSS injected via style tag */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
