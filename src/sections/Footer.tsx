const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

const areaLinks = [
  'Derecho Civil',
  'Derecho Penal',
  'Derecho Inmobiliario',
  'Derecho de Familia',
  'Derecho Empresarial',
  'Asesoría Integral',
]

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  fontWeight: 400,
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.3s',
  display: 'block',
  marginBottom: '12px',
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#050505',
        borderTop: '1px solid var(--gold)',
        padding: '80px 0 40px',
      }}
    >
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Logo column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
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
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  color: 'var(--text-white)',
                  textTransform: 'uppercase',
                }}
              >
                Matos Mejía & Asoc.
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                maxWidth: '280px',
              }}
            >
              Más de 25 años de experiencia en asesoría legal integral
              en la República Dominicana. Justicia, experiencia y resultados.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                marginBottom: '24px',
              }}
            >
              Links Rápidos
            </h4>
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Areas */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                marginBottom: '24px',
              }}
            >
              Áreas de Práctica
            </h4>
            {areaLinks.map((a) => (
              <span key={a} style={{ ...linkStyle, cursor: 'default' }}>
                {a}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                marginBottom: '24px',
              }}
            >
              Contacto
            </h4>
            <p style={{ ...linkStyle, cursor: 'default' }}>
              C/ Duarte Esq. 30 de Marzo
              <br />
              Azua, Rep. Dom. 71000
            </p>
            <a
              href="https://instagram.com/mmyasoc"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              @mmyasoc — Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '32px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}
          >
            &copy; {new Date().getFullYear()} Matos Mejía & Asoc. | Azua, República Dominicana
          </p>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        style={{
          height: '1px',
          background: 'var(--gold)',
          marginTop: '40px',
          opacity: 0.3,
        }}
      />

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
