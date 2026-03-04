# ⚖️ MATOS MEJÍA & ASOC. — CLAUDE.md DEFINITIVO
## Bufete de Abogados — Web Premium con Animaciones Interactivas

---

## ⚠️ INSTRUCCIÓN #1 — LIMPIAR ANTES DE CONSTRUIR

```
ANTES DE ESCRIBIR CUALQUIER CÓDIGO:
1. Elimina todo en /src/components/
2. Elimina todo en /src/sections/
3. Ejecuta: npm install framer-motion
4. Lee este CLAUDE.md completo
5. Luego construye desde cero limpio
```

---

## 🎯 VISIÓN DE DISEÑO

**Estética:** Dark Legal Luxury — negro profundo, dorado como acento único, tipografía serif autoritaria.
**Inspiración:** De Jure Law Firm de la referencia — oscuro, dorado, elegante, imponente.
**Diferenciador:** Hero con animaciones 3D interactivas. La balanza de la justicia, partículas flotantes y efecto parallax en la foto principal.
**Sensación:** "Este bufete tiene 25 años de experiencia. Son serios, elegantes y dominicanos."

---

## 🎨 SISTEMA DE DISEÑO — DARK LEGAL LUXURY

### Paleta de Colores
```css
:root {
  /* Fondos oscuros */
  --bg-black:    #0A0A0A;       /* Negro puro — fondo base */
  --bg-dark:     #111111;       /* Negro suave — secciones */
  --bg-card:     #1A1A1A;       /* Cards oscuras */
  --bg-section:  #141414;       /* Secciones alternas */

  /* Dorado — ÚNICO acento (del logo hexagonal) */
  --gold:        #C9A84C;       /* Dorado principal */
  --gold-light:  #E5C56A;       /* Dorado claro — hover */
  --gold-dark:   #A07830;       /* Dorado oscuro */
  --gold-pale:   rgba(201,168,76,0.12); /* Dorado muy suave — fondos */
  --gold-glow:   rgba(201,168,76,0.25); /* Glow dorado */

  /* Textos */
  --text-white:  #F5F0E8;       /* Blanco cálido */
  --text-off:    rgba(245,240,232,0.75); /* Blanco/75 */
  --text-muted:  rgba(245,240,232,0.45); /* Blanco/45 */

  /* Bordes */
  --border:      rgba(201,168,76,0.2);   /* Borde dorado sutil */
  --border-dark: rgba(255,255,255,0.06); /* Borde blanco muy sutil */

  /* Sombras */
  --shadow-gold: 0 8px 40px rgba(201,168,76,0.2);
  --shadow-dark: 0 8px 40px rgba(0,0,0,0.5);
}
```

### Tipografía — AUTORIDAD LEGAL
```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
```

```css
/* Títulos: Cormorant Garamond — elegancia legal clásica */
--font-display: 'Cormorant Garamond', serif;

/* Body y UI: Jost — limpio y moderno */
--font-body: 'Jost', sans-serif;

/* Escala */
--text-hero:  clamp(64px, 8vw, 120px);  /* Hero principal */
--text-h2:    clamp(40px, 5vw, 72px);   /* Títulos de sección */
--text-h3:    clamp(22px, 2.5vw, 32px); /* Subtítulos */
--text-body:  17px;
--text-label: 12px;                      /* Labels uppercase */

/* Tracking */
--track-display: -0.02em;   /* Cormorant títulos */
--track-label:   0.2em;     /* Labels en Jost uppercase */
```

### Espaciado OBLIGATORIO
```css
section       { padding: 130px 0; }
.container    { max-width: 1240px; margin: 0 auto; padding: 0 60px; }
.section-title { margin-bottom: 80px; }
/* Mobile: padding 80px 0 | container padding 0 24px */
```

---

## 🏗️ STACK TÉCNICO

```bash
# Vite + React + TypeScript + Tailwind
npm install framer-motion        # Animaciones
npm install @react-three/fiber   # 3D interactivo (para hero)
npm install @react-three/drei    # Helpers 3D
npm install three                # Three.js
```

---

## 📁 ESTRUCTURA

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── GoldLine.tsx          ← Línea decorativa dorada reutilizable
│   ├── SectionLabel.tsx      ← Etiqueta pequeña dorada
│   ├── AnimatedCounter.tsx
│   └── WhatsAppButton.tsx
├── sections/
│   ├── HeroSection.tsx       ← ⭐ SÚPER INTERACTIVO
│   ├── StatsSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyUsSection.tsx
│   ├── TeamSection.tsx       ← Miembros del bufete
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📄 SECCIONES — ESPECIFICACIONES EXACTAS

---

### 1. NAVBAR — Elegante y transparente

```tsx
// Transparente sobre el hero → oscuro al scroll
// Altura: 80px

// Izquierda: Logo hexagonal SVG en dorado + "MATOS MEJÍA & ASOC." en Jost
// Centro: Links en Jost 13px uppercase letter-spacing 0.15em
//   Inicio | Nosotros | Servicios | Equipo | Contacto
//   Color: var(--text-off), hover: var(--gold)
// Derecha: Botón outline dorado "Consulta Gratuita"
//   border: 1px solid var(--gold), color: var(--gold)
//   hover: bg: var(--gold), color: black
//   border-radius: 2px (angular, no redondeado — legal serio)

// Al scroll: bg: rgba(10,10,10,0.95), backdrop-filter: blur(20px)
// border-bottom: 1px solid var(--border)
```

---

### 2. HERO SECTION ⭐ — SÚPER INTERACTIVO

**Este es el corazón de la web. Máxima interactividad.**

**Concepto:** Imagen de la estatua de la Justicia (o edificio/abogados) en el fondo con efecto parallax al mover el mouse. Texto que se revela con animación. Partículas doradas flotando.

**Fondo hero:**
```tsx
// Imagen de fondo full-screen:
// https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=80
// (balanza de justicia, oscuro y dramático)

// Overlay gradiente:
background: linear-gradient(
  135deg,
  rgba(10,10,10,0.92) 0%,
  rgba(10,10,10,0.75) 40%,
  rgba(10,10,10,0.85) 100%
);
```

**Efecto Parallax en la imagen de fondo:**
```tsx
// Usar framer-motion useMotionValue + useTransform
// Al mover el mouse, la imagen de fondo se mueve sutilmente
// en dirección opuesta al cursor (efecto profundidad)

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

// Transform: movimiento de -15px a +15px según posición del mouse
const bgX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
const bgY = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);

// onMouseMove en el contenedor del hero
const handleMouseMove = (e) => {
  mouseX.set(e.clientX);
  mouseY.set(e.clientY);
};
```

**Partículas doradas flotantes:**
```tsx
// 25 partículas CSS puras
// Tamaños: 2px - 6px, círculos
// Color: rgba(201,168,76, 0.4-0.7)
// Posiciones random distribuidas por todo el hero
// Animación: float con translateY + opacity
// Cada partícula: duration 4-8s, delay 0-5s, infinite

@keyframes particle-float {
  0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
}
```

**Línea dorada animada (separador visual):**
```tsx
// Línea horizontal de 1px dorado que se dibuja de izquierda a derecha
// al cargar — efecto de "revelación"
// scaleX: 0 → 1, duration: 1.5s, ease: easeInOut
```

**Contenido del Hero:**
```tsx
// Layout: centrado con leve tendencia izquierda
// Altura: 100vh

// Badge dorado (entra desde abajo con delay 0.3s):
<motion.span
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  style={{
    border: '1px solid var(--gold)',
    color: 'var(--gold)',
    padding: '8px 20px',
    fontSize: '12px',
    fontFamily: 'Jost',
    fontWeight: 500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    borderRadius: '1px'
  }}
>
  ⚖️ BUFETE DE ABOGADOS · AZUA, REP. DOM.
</motion.span>

// Título principal — cada línea entra por separado con stagger:
// Línea 1 delay: 0.5s
// Línea 2 delay: 0.7s
// Línea 3 delay: 0.9s
<motion.h1 style={{
  fontFamily: 'Cormorant Garamond',
  fontSize: 'clamp(64px, 8vw, 120px)',
  fontWeight: 300,
  letterSpacing: '-0.02em',
  lineHeight: 1.0,
  color: 'var(--text-white)'
}}>
  Justicia,
  <br/>
  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Experiencia</em>
  <br/>
  y Resultados.
</motion.h1>

// Línea dorada animada (delay 1.1s)
<motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ delay: 1.1, duration: 1.2, ease: 'easeInOut' }}
  style={{
    height: '1px',
    background: 'var(--gold)',
    width: '120px',
    transformOrigin: 'left',
    margin: '32px 0'
  }}
/>

// Descripción (delay 1.3s):
<motion.p style={{
  fontFamily: 'Jost',
  fontSize: '18px',
  fontWeight: 300,
  color: 'var(--text-off)',
  lineHeight: 1.8,
  maxWidth: '520px'
}}>
  Más de 25 años de experiencia ofreciendo asesoría
  legal integral en República Dominicana. Defendemos
  tus derechos con excelencia y dedicación.
</motion.p>

// Botones (delay 1.5s):
<div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
  // Botón principal: bg dorado, color negro, texto Jost uppercase
  // Botón secundario: outline dorado, color dorado
  <button className="btn-gold">Consulta Gratuita →</button>
  <button className="btn-outline">Conocer el Equipo</button>
</div>

// Scroll indicator animado al fondo:
// Línea vertical que se dibuja + "SCROLL" en Jost 10px muted
// Animación: línea que se dibuja y rebota
```

**Elemento 3D interactivo (balanza):**
```tsx
// SVG de balanza de justicia en la esquina derecha
// Que se inclina sutilmente al mover el mouse
// Usando framer-motion rotate basado en mouseX

const balanceRotate = useTransform(mouseX, [0, window.innerWidth], [-8, 8]);

<motion.svg
  style={{ rotate: balanceRotate }}
  // SVG de balanza simple pero elegante
  // Color: var(--gold), opacity: 0.15
  // Tamaño: 400px × 400px
  // Posición: absolute right: -5%, top: 10%
/>
```

---

### 3. STATS SECTION

```tsx
// Fondo: var(--bg-dark)
// Banda delgada: padding: 80px 0
// Línea dorada superior e inferior: 1px solid var(--border)

// 4 stats en fila con AnimatedCounter

const stats = [
  { value: 25,   suffix: "+", label: "Años de Experiencia" },
  { value: 500,  suffix: "+", label: "Casos Resueltos" },
  { value: 100,  suffix: "%", label: "Compromiso Legal" },
  { value: 5,    suffix: "",  label: "Especialidades" }
];

// Número: Cormorant Garamond 700, 72px, color: var(--gold)
// Label: Jost 400, 14px uppercase, color: var(--text-muted)
// Separador: 1px solid var(--border) entre stats
```

---

### 4. ABOUT SECTION

```tsx
// Fondo: var(--bg-black)
// padding: 130px 0

// Layout: Texto izquierda (55%) + Imagen derecha (45%)

// TEXTO IZQUIERDA:
// [SectionLabel: WHY US]
// Línea dorada 1px antes del label
// <h2 Cormorant>Por Qué Elegir<br/><em>Matos Mejía & Asoc.</em></h2>
// Párrafos en Jost 400 color var(--text-off) lineHeight 1.9

// 3 cards de razones (como en la referencia De Jure):
// Número "01" "02" "03" en Cormorant 700 dorado grande
// Título en Cormorant 600 blanco
// Descripción en Jost 400 muted

const reasons = [
  { num: "01", title: "Experiencia & Excelencia",    desc: "Más de 25 años resolviendo casos complejos con resultados comprobados." },
  { num: "02", title: "Enfoque Personalizado",        desc: "Cada cliente recibe atención directa y una estrategia a su medida." },
  { num: "03", title: "Comunicación Transparente",   desc: "Te mantenemos informado en cada etapa de tu proceso legal." }
];

// Estilo card:
// bg: var(--bg-card), border: 1px solid var(--border-dark)
// border-left: 2px solid var(--gold)
// border-radius: 2px (angular — legal serio)
// padding: 32px 28px
// hover: border-left-color se vuelve más brillante, leve glow

// IMAGEN DERECHA:
// https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80
// (biblioteca legal / abogados en reunión)
// aspect-ratio: 4/5
// border-radius: 2px
// box-shadow: var(--shadow-dark)
// Borde dorado sutil: outline: 1px solid var(--border) con offset
// Efecto parallax sutil al scroll con framer-motion useScroll
```

---

### 5. SERVICES SECTION

```tsx
// Fondo: var(--bg-section)
// padding: 130px 0

// Header centrado:
// [SectionLabel: ÁREAS DE PRÁCTICA]
// <h2 Cormorant centrado>Nuestras Especialidades<br/>Legales</h2>
// Línea dorada centrada 60px

// Grid 3x2 — 6 servicios
// Cada card: hover con efecto de "libro abriéndose"
//   → framer-motion: rotateY 0 → 5deg, translateY -8px

const services = [
  { icon: "⚖️",  name: "Derecho Civil",         desc: "Contratos, obligaciones, responsabilidad civil y disputas patrimoniales." },
  { icon: "🏛️",  name: "Derecho Penal",          desc: "Defensa y representación en procesos penales con experiencia comprobada." },
  { icon: "🏠",  name: "Derecho Inmobiliario",   desc: "Compraventas, hipotecas, deslindes y litigios de propiedad." },
  { icon: "👨‍👩‍👧", name: "Derecho de Familia",    desc: "Divorcios, custodia, adopciones y sucesiones." },
  { icon: "🏢",  name: "Derecho Empresarial",    desc: "Constitución de empresas, contratos comerciales y asesoría corporativa." },
  { icon: "📋",  name: "Asesoría Legal Integral", desc: "Consultoría preventiva para personas y empresas en todas las áreas." }
];

// Estilo card:
// bg: var(--bg-card), border: 1px solid var(--border-dark)
// border-radius: 2px, padding: 40px 32px
// Número de orden en Cormorant 700 48px color: var(--gold-pale)
// Ícono: 36px
// Nombre: Cormorant 600 22px color blanco
// Descripción: Jost 400 15px color muted
// Línea dorada inferior: aparece en hover con scaleX 0→1
// hover: bg var(--bg-dark), border-color: var(--border)
//        box-shadow: inset 0 0 0 1px var(--gold) (borde dorado completo)
```

---

### 6. WHY US — BANDA DRAMÁTICA

```tsx
// Fondo: Imagen de fondo oscura con overlay
// https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1600&q=80
// Overlay: rgba(10,10,10,0.88)
// padding: 130px 0

// Header centrado blanco:
// "Más de 25 años<br/>construyendo confianza."

// Grid 2x2 de features con ícono dorado
// Línea dorada decorativa separando las 4 en forma de cruz (+)
```

---

### 7. TEAM SECTION ⭐

```tsx
// Fondo: var(--bg-black)
// padding: 130px 0

// Header:
// [SectionLabel: NUESTRO EQUIPO]
// <h2 Cormorant>Los Socios de<br/><em>Matos Mejía & Asoc.</em></h2>

// Grid 4 columnas (como en De Jure reference)
// Si hay menos de 4 miembros reales, dejar placeholders elegantes

// DATOS REALES — El cliente debe proveer fotos
// Por ahora usar Unsplash de abogados profesionales

const teamMembers = [
  {
    name: "Lic. Matos",
    role: "SOCIO FUNDADOR",
    image: "/images/team-1.jpg",
    // placeholder: https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80
    social: { instagram: "@mmyasoc" }
  },
  {
    name: "Lic. Mejía",
    role: "SOCIA",
    image: "/images/team-2.jpg",
    // placeholder: https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80
    social: { instagram: "@mmyasoc" }
  }
  // Agregar más según indique el cliente
];

// Estilo cada team card:
// Imagen: aspect-ratio 3/4, object-fit cover, grayscale(20%)
// hover imagen: grayscale(0%), scale(1.03), transition 0.5s
// Nombre: Cormorant 700 22px blanco uppercase
// Rol: Jost 400 12px dorado uppercase letter-spacing 0.2em
// Íconos sociales dorados debajo
// border-bottom: 2px solid var(--gold) aparece en hover

// ANIMACIÓN ESPECIAL DE ENTRADA:
// Las cards entran desde abajo con stagger 0.15s entre cada una
// framer-motion: initial opacity:0 y:60 → animate opacity:1 y:0
```

---

### 8. TESTIMONIALS

```tsx
// Fondo: var(--bg-section)
// padding: 130px 0

// Header centrado

// Slider automático cada 6s con fade transition
// 3 testimonios

// Card estilo: bg var(--bg-card)
// Comilla decorativa " en Cormorant 800 120px color: var(--gold) opacity: 0.2
// Texto: Cormorant Italic 400 22px color: var(--text-off)
// Línea dorada 40px antes del nombre
// Nombre: Jost 600 14px uppercase dorado
// Rol: Jost 400 13px muted

const testimonials = [
  {
    text: "Matos Mejía & Asoc. resolvieron mi caso de manera profesional y transparente. Su experiencia y dedicación marcaron la diferencia. Totalmente recomendados.",
    name: "Carlos R.",
    role: "Cliente — Derecho Civil"
  },
  {
    text: "Excelente equipo de abogados. Me acompañaron en cada etapa del proceso con claridad y compromiso. En Azua, son sin duda la mejor opción legal.",
    name: "María F.",
    role: "Cliente — Derecho de Familia"
  },
  {
    text: "25 años de experiencia se notan en cada detalle. Mi caso inmobiliario fue resuelto con rapidez y profesionalismo. Muy agradecido con el equipo.",
    name: "Roberto M.",
    role: "Cliente — Derecho Inmobiliario"
  }
];
```

---

### 9. CONTACT SECTION

```tsx
// Fondo: var(--bg-black)
// padding: 130px 0

// Header centrado:
// [SectionLabel: CONTACTO]
// <h2 Cormorant>"Cuéntanos Tu Caso.<br/>Te Escuchamos."</h2>
// Subtítulo: Consulta inicial gratuita

// Layout: 2 columnas

// IZQUIERDA — Info de contacto elegante:
// bg: var(--bg-card), border: 1px solid var(--border)
// padding: 56px 48px, border-radius: 2px

// Logo grande M arriba
// Datos con líneas doradas separadoras:

// ─────────────────────────
// 📍 C/ Duarte Esq. 30 de Marzo
//    Azua, República Dominicana 71000
// ─────────────────────────
// ⚖️ +25 Años de Experiencia
//    Asesoría Legal Integral
// ─────────────────────────
// 📱 @mmyasoc
//    Instagram — Oficina de Abogados
// ─────────────────────────

// Botón dorado full-width:
// "Consulta Gratuita →"
// bg: var(--gold), color: black, font: Jost 600 uppercase

// DERECHA — Formulario:
// bg: var(--bg-card), border: 1px solid var(--border)
// padding: 56px 48px, border-radius: 2px

// Campos:
// [Nombre completo]
// [Teléfono / WhatsApp]
// [Email]
// [Área Legal: Select]
//   → Derecho Civil
//   → Derecho Penal
//   → Derecho Inmobiliario
//   → Derecho de Familia
//   → Derecho Empresarial
//   → Asesoría General
// [Descripción del caso]
// [Btn dorado: Enviar Consulta →]

// ESTILO INPUTS:
// bg: rgba(255,255,255,0.04)
// border: 1px solid rgba(255,255,255,0.1)
// border-radius: 1px (angular)
// color: var(--text-white)
// font: Jost 400 16px
// padding: 16px 20px
// focus: border-color: var(--gold), box-shadow: 0 0 0 3px var(--gold-pale)
// placeholder: var(--text-muted)

// Label encima de cada input:
// Jost 500 12px uppercase letter-spacing 0.15em color: var(--text-muted)
```

---

### 10. FOOTER

```tsx
// Fondo: #050505 con línea dorada 1px superior
// padding: 80px 0 40px

// 4 columnas:
// Logo M hexagonal | Links rápidos | Áreas de práctica | Contacto

// Copyright: centrado, Jost 400 13px, color: var(--text-muted)
// "© 2025 Matos Mejía & Asoc. | Azua, República Dominicana"

// Línea dorada inferior: 1px full-width
```

---

## 🎭 SISTEMA DE ANIMACIONES — Framer Motion

### 1. Hero — Parallax con mouse
```tsx
// useMotionValue(0) para mouseX y mouseY
// La imagen de fondo se mueve -15px a +15px según el cursor
// La balanza SVG rota -8deg a +8deg según mouseX
// Texto principal: leve movimiento opuesto (efecto profundidad)
```

### 2. Hero — Entrada escalonada
```tsx
// Badge: delay 0.3s, slideUp 30px
// Título línea 1: delay 0.5s, slideUp 40px
// Título línea 2: delay 0.7s, slideUp 40px
// Título línea 3: delay 0.9s, slideUp 40px
// Línea dorada: delay 1.1s, scaleX 0→1
// Párrafo: delay 1.3s, fadeIn
// Botones: delay 1.5s, slideUp
```

### 3. Scroll animations — todas las secciones
```tsx
// useInView de framer-motion para cada sección
// initial: { opacity: 0, y: 50 }
// animate: { opacity: 1, y: 0 }
// transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
// Stagger children: 0.12s
```

### 4. Team cards — entrada dramática
```tsx
// Cada card entra desde abajo con stagger 0.15s
// whileHover: { y: -10, transition: { duration: 0.3 } }
// Imagen: grayscale filter que se quita en hover
```

### 5. Service cards — hover libro
```tsx
whileHover={{
  y: -8,
  rotateY: 3,
  boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.5)",
  transition: { duration: 0.3 }
}}
```

### 6. Partículas doradas — hero
```css
/* 25 divs absolutos */
@keyframes gold-particle {
  0%   { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
  10%  { opacity: 0.6; }
  90%  { opacity: 0.4; }
  100% { transform: translateY(-120px) translateX(30px) rotate(360deg); opacity: 0; }
}
/* duration: random 4s-8s, delay: random 0s-6s */
```

### 7. Líneas doradas — revelación
```tsx
// En About y Services: líneas que se dibujan al entrar al viewport
// scaleX 0 → 1, transformOrigin: 'left', duration: 1s
```

### 8. AnimatedCounter — Stats
```tsx
// IntersectionObserver trigger
// spring animation de 0 al valor en 2.5s
// Números en Cormorant Garamond dorado
```

---

## 🔘 WHATSAPP FLOTANTE

```tsx
// Estilo legal — no el típico verde
// bg: var(--gold), color: black
// border-radius: 2px (angular)
// Icono WhatsApp + "Consulta Gratuita"
// box-shadow: var(--shadow-gold)
// hover: scale 1.05

const whatsappMsg = "Hola, me interesa una consulta legal con Matos Mejía & Asoc.";
// Número: obtener del cliente — placeholder: +1-809-XXX-XXXX
```

---

## 📱 RESPONSIVE

```
Mobile (375px):
- Hero: Parallax desactivado, texto centrado
- Stats: 2x2 grid
- Services: 1 columna
- Team: 2 columnas
- Contact: columnas apiladas

Tablet (768px):
- Services: 2 columnas
- Team: 2 columnas
- Why Us: 2 columnas

Desktop (1024px+): Layout completo
Max-width: 1240px
```

---

## 🎯 REGLAS ABSOLUTAS

```
1. FONDO: Negro #0A0A0A dominante — legal = autoridad = oscuro
2. FUENTES: Cormorant Garamond (títulos elegantes) + Jost (body limpio)
3. ACENTO: Dorado #C9A84C ÚNICO — jamás usar colores llamativos
4. BORDAS: Angular, border-radius: 2px máximo — NADA redondeado
5. PARALLAX: Obligatorio en el hero — es el diferenciador principal
6. PARTÍCULAS: 25 partículas doradas flotantes en el hero
7. BALANZA SVG: Que se inclina con el mouse — elemento interactivo
8. TEAM: Fotos en blanco y negro que se vuelven color en hover
9. ESPACIADO: 130px entre secciones — SIN EXCEPCIÓN
10. SKILLS: frontend-design + taste-skill + webapp-testing — TODAS
```

---

## 📌 METADATA SEO

```tsx
title: "Matos Mejía & Asoc. | Bufete de Abogados — Azua, República Dominicana"
description: "Oficina de Abogados Matos Mejía & Asoc. Más de 25 años de experiencia en asesoría legal integral. Derecho civil, penal, inmobiliario, familiar y empresarial. Azua, RD."
```

---

## 💬 INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
Lee el CLAUDE.md completo antes de empezar.

PASO 1: Limpia /src/components/ y /src/sections/
PASO 2: npm install framer-motion
PASO 3: Construye en este orden:

1. index.css — variables CSS + fuentes Cormorant + Jost
2. Componentes base: GoldLine, SectionLabel, AnimatedCounter
3. HeroSection.tsx ← PRIORIDAD MÁXIMA
   - Parallax con mouse (framer-motion)
   - 25 partículas doradas CSS
   - Balanza SVG que rota con el mouse
   - Entrada escalonada del texto
4. Navbar.tsx
5. StatsSection.tsx
6. AboutSection.tsx
7. ServicesSection.tsx
8. WhyUsSection.tsx
9. TeamSection.tsx
10. TestimonialsSection.tsx
11. ContactSection.tsx
12. Footer + WhatsAppButton
13. App.tsx

DETENTE después del Hero y muéstramelo.
Espera aprobación antes de continuar.

Usa las skills frontend-design, taste-skill y webapp-testing.
El resultado debe verse como el bufete de abogados más 
premium y moderno de República Dominicana.
```

---

*Desarrollado por NEXIX Tech Studio | nexixstudio.com*