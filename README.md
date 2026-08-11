
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Colegio Hernán Venegas Carrillo | Institución Educativa Distrital</title>
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="imagenes-indexprincipal/logos/favicon.svg">
    <link rel="shortcut icon" href="imagenes-indexprincipal/logos/favicon.svg">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">


    
    <!-- ESTILOS EMBEBIDOS EN EL MISMO ARCHIVO HTML -->
    <style>
/* ==========================================================================
   COLEGIO HERNÁN VENEGAS CARRILLO - DISEÑO INSTITUCIONAL CON VERDE SUAVE
   ========================================================================== */

git add .
git commit -m "Agregar CSS y JS"
git push



:root {
    /* Paleta Verde Clarito & Bosque Institucional */
    --bg-main: #f3f8f4;
    --bg-secondary: #e9f2eb;
    --bg-mint-soft: #dfede3;
    --bg-card: #ffffff;
    --bg-card-hover: #f7fcb8;
    
    --accent-emerald: #1b4d3e;
    --accent-forest: #2d6a4f;
    --accent-green: #40916c;
    --accent-mint: #52b788;
    --accent-light-mint: #74c69d;
    --accent-gold: #d4af37;
    --accent-gold-soft: #f4e8c1;

    --text-dark: #1a2e24;
    --text-muted: #435e50;
    --text-light: #f4f8f5;
    
    --border-color: #d2e4d7;
    --border-highlight: #74c69d;

    --shadow-soft: 0 8px 24px rgba(27, 77, 62, 0.08);
    --shadow-hover: 0 16px 36px rgba(27, 77, 62, 0.14);
    
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    
    --font-heading: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Reset & Configuración Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-main);
    color: var(--text-dark);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* --------------------------------------------------------------------------
   BARRA DE NAVEGACIÓN (HEADER) - DESATURADO Y ELEGANTE PARA DESKTOP
   -------------------------------------------------------------------------- */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(243, 248, 244, 0.94);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(45, 106, 79, 0.12);
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.navbar-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
}

.logo-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.logo-img-wrapper {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #ffffff;
    padding: 3px;
    border: 2px solid var(--border-color);
    box-shadow: 0 2px 8px rgba(27, 77, 62, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    filter: saturate(0.95);
}

.brand-text-container {
    display: flex;
    flex-direction: column;
}

.brand-title {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.1rem;
    color: var(--accent-emerald);
    letter-spacing: -0.2px;
    line-height: 1.2;
}

.brand-subtitle {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
}

.menu ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1.25rem;
}

.nav-link, 
.menu ul li a {
    font-family: var(--font-heading);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-dark);
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-sm);
    transition: all 0.25s ease;
    display: inline-block;
}

.nav-link:hover,
.menu ul li a:hover,
.nav-link.active {
    color: var(--accent-emerald);
    background-color: var(--bg-mint-soft);
}

.sub-menu {
    position: relative;
}

.sub-menu > a {
    cursor: pointer;
}

.sub-menu ul {
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    min-width: 220px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-hover);
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.sub-menu:hover ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.sub-menu ul li {
    width: 100%;
}

.sub-menu ul li a {
    display: block;
    width: 100%;
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
    color: var(--text-dark);
    border-radius: 0;
}

.sub-menu ul li a:hover {
    background-color: var(--bg-secondary);
    color: var(--accent-emerald);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
}

.menu-toggle span {
    width: 100%;
    height: 3px;
    background: var(--accent-emerald);
    border-radius: 2px;
    transition: all 0.3s ease;
}

/* --------------------------------------------------------------------------
   HERO SECTION - IMPACTANTE Y SUAVE
   -------------------------------------------------------------------------- */
.hero-modern {
    position: relative;
    min-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 130px 20px 60px;
    overflow: hidden;
}

.hero-bg-container {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.hero-slider {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.2s ease-in-out;
    filter: brightness(0.65) contrast(1.05);
}

.slide.active {
    opacity: 1;
}

.bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(27, 77, 62, 0.88) 0%, rgba(45, 106, 79, 0.78) 50%, rgba(20, 50, 40, 0.85) 100%);
    z-index: 2;
}

.hero-content-modern {
    position: relative;
    z-index: 3;
    max-width: 950px;
    text-align: center;
    color: #ffffff;
    padding: 2rem;
}

.hero-badge-pulse {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    padding: 6px 18px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1.25rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.pulse-dot {
    width: 10px;
    height: 10px;
    background: var(--accent-gold);
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
    animation: pulseRing 1.8s infinite;
}

@keyframes pulseRing {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
}

.badge-text-hero {
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #ffffff;
}

.floating-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: #ffffff;
    padding: 6px;
    border: 3px solid var(--accent-gold);
    margin-bottom: 1.25rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-out;
}

.floating-logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
}

.main-title {
    font-family: var(--font-heading);
    font-size: 3.8rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
    background: linear-gradient(180deg, #ffffff 0%, #e2efe6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle-modern {
    margin-bottom: 1.25rem;
}

.subtitle-text {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--accent-gold);
    text-transform: uppercase;
}

.description-modern {
    max-width: 720px;
    margin: 0 auto 2rem;
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.95);
    min-height: 50px;
}

.typing-text {
    border-right: 2.5px solid var(--accent-gold);
    animation: blinkCursor 0.8s step-end infinite;
    padding-right: 4px;
}

@keyframes blinkCursor {
    from, to { border-color: transparent; }
    50% { border-color: var(--accent-gold); }
}

.hero-cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
}

.hero-btn {
    position: relative;
    padding: 0.95rem 2.2rem;
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 0.95rem;
    border-radius: 30px;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.primary-btn {
    background: linear-gradient(135deg, var(--accent-gold), #e5c158);
    color: var(--accent-emerald);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}

.primary-btn:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.6);
}

.secondary-btn {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(8px);
}

.secondary-btn:hover {
    background: #ffffff;
    color: var(--accent-emerald);
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.25);
}

.stats-circles {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.stat-circle {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.circle-progress {
    position: relative;
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.progress-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.circle-bg {
    fill: none;
    stroke: rgba(255, 255, 255, 0.15);
    stroke-width: 6;
}

.circle-bar {
    fill: none;
    stroke: var(--accent-gold);
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 264;
    stroke-dashoffset: 264;
    transition: stroke-dashoffset 2s ease-out;
}

.stat-number {
    position: relative;
    z-index: 2;
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 1.35rem;
    color: #ffffff;
}

.stat-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
}

.slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 1.5rem;
}

.slider-dots .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    transition: all 0.3s ease;
}

.slider-dots .dot.active,
.slider-dots .dot:hover {
    background: var(--accent-gold);
    transform: scale(1.2);
    width: 28px;
    border-radius: 12px;
}

.scroll-indicator-modern a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.scroll-line {
    width: 2px;
    height: 35px;
    background: rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
    border-radius: 2px;
}

.scroll-progress {
    width: 100%;
    height: 50%;
    background: var(--accent-gold);
    animation: scrollAnim 1.8s infinite;
}

@keyframes scrollAnim {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(200%); }
}

.scroll-text {
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* --------------------------------------------------------------------------
   SECCIÓN SOBRE NOSOTROS (FONDO VERDE SUAVE)
   -------------------------------------------------------------------------- */
.sobre-nosotros-section {
    padding: 80px 20px;
    background-color: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
}

.sobre-nosotros-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.blob-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    border: 3px solid #ffffff;
}

.blob-video {
    width: 100%;
    height: 100%;
    border: none;
}

.section-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: var(--accent-forest);
    background: var(--bg-mint-soft);
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
}

.sobre-nosotros-title {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--accent-emerald);
    margin-bottom: 0.25rem;
}

.sobre-nosotros-subtitle {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
}

.sobre-nosotros-description {
    font-size: 0.98rem;
    color: var(--text-dark);
    margin-bottom: 1.75rem;
}

.valores-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.valor-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #ffffff;
    padding: 1rem 1.25rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-soft);
    border-left: 4px solid var(--accent-forest);
    transition: transform 0.25s ease;
}

.valor-item:hover {
    transform: translateX(6px);
}

.valor-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--bg-secondary);
    color: var(--accent-emerald);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.valor-icon svg {
    width: 22px;
    height: 22px;
}

.valor-title {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--accent-emerald);
}

.valor-desc {
    font-size: 0.82rem;
    color: var(--text-muted);
}

/* --------------------------------------------------------------------------
   SECCIÓN NUESTRA COMUNIDAD
   -------------------------------------------------------------------------- */
.nuestra-comunidad-section {
    padding: 80px 20px;
    background-color: var(--bg-main);
}

.comunidad-container {
    max-width: 1200px;
    margin: 0 auto;
}

.comunidad-header {
    text-align: center;
    margin-bottom: 3rem;
}

.comunidad-main-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--accent-emerald);
}

.title-outline {
    color: var(--accent-forest);
}

.comunidad-content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.comunidad-card {
    perspective: 1000px;
    height: 280px;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
}

.comunidad-card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: var(--radius-md);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--border-color);
}

.card-front {
    background: #ffffff;
}

.card-back {
    background: var(--accent-emerald);
    color: #ffffff;
    transform: rotateY(180deg);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.card-icon-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.card-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--accent-emerald);
    margin-bottom: 0.5rem;
}

.card-back .card-title,
.card-back h4 {
    color: var(--accent-gold);
}

.card-download-btn {
    margin-top: 1rem;
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background: var(--accent-gold);
    color: var(--accent-emerald);
    font-weight: 700;
    font-size: 0.85rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
    transition: background 0.2s ease;
}

.card-download-btn:hover {
    background: #ffffff;
}

/* --------------------------------------------------------------------------
   NOTICIAS ESCOLARES
   -------------------------------------------------------------------------- */
.noticias-modern-section {
    padding: 80px 20px;
    background-color: var(--bg-secondary);
}

.noticias-modern-container {
    max-width: 1100px;
    margin: 0 auto;
}

.noticias-header-modern {
    text-align: center;
    margin-bottom: 2.5rem;
}

.noticias-title-modern {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--accent-emerald);
}

.news-badge-pulse {
    display: inline-block;
    background: var(--bg-mint-soft);
    color: var(--accent-emerald);
    font-weight: 700;
    font-size: 0.8rem;
    padding: 4px 14px;
    border-radius: 20px;
    margin-bottom: 0.75rem;
}

.noticias-preview {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 30px;
    background: #ffffff;
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--border-color);
    align-items: center;
    margin-bottom: 2rem;
}

.preview-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: var(--radius-md);
}

.preview-content h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--accent-emerald);
    margin-bottom: 0.75rem;
}

.preview-features {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    background: var(--bg-main);
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    color: var(--text-dark);
}

.noticias-cta-simple {
    text-align: center;
}

.cta-btn-grande {
    display: inline-block;
    padding: 0.9rem 2.2rem;
    background: linear-gradient(135deg, var(--accent-emerald), var(--accent-forest));
    color: #ffffff;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1rem;
    border-radius: 30px;
    text-decoration: none;
    box-shadow: 0 6px 20px rgba(27, 77, 62, 0.25);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cta-btn-grande:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(27, 77, 62, 0.35);
}

/* --------------------------------------------------------------------------
   GALERÍA HERVECA
   -------------------------------------------------------------------------- */
.galeria-herveca-section {
    padding: 80px 20px;
    background-color: var(--bg-main);
    text-align: center;
}

.galeria-herveca-header {
    max-width: 700px;
    margin: 0 auto 3rem;
}

.galeria-herveca-title {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--accent-emerald);
    margin-bottom: 0.5rem;
}

.galeria-herveca-grid {
    max-width: 1200px;
    margin: 0 auto 2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
}

.galeria-herveca-item {
    position: relative;
    height: 230px;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
}

.galeria-herveca-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.galeria-herveca-item:hover .galeria-herveca-img {
    transform: scale(1.08);
}

.galeria-herveca-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(27, 77, 62, 0.85), transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 1.25rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.galeria-herveca-item:hover .galeria-herveca-overlay {
    opacity: 1;
}

.galeria-herveca-text {
    color: #ffffff;
    font-weight: 700;
    font-size: 0.95rem;
}

.galeria-herveca-more-btn {
    display: inline-block;
    padding: 0.75rem 1.8rem;
    background: #ffffff;
    color: var(--accent-emerald);
    border: 2px solid var(--accent-emerald);
    font-weight: 700;
    border-radius: 24px;
    text-decoration: none;
    transition: all 0.25s ease;
}

.galeria-herveca-more-btn:hover {
    background: var(--accent-emerald);
    color: #ffffff;
}

/* --------------------------------------------------------------------------
   DIRECTIVOS DEL COLEGIO
   -------------------------------------------------------------------------- */
.directivos-modern-section {
    padding: 80px 20px;
    background-color: var(--bg-secondary);
}

.directivos-modern-container {
    max-width: 1200px;
    margin: 0 auto;
}

.directivos-header-modern {
    text-align: center;
    margin-bottom: 3rem;
}

.directivos-badge {
    display: inline-block;
    background: var(--bg-mint-soft);
    color: var(--accent-emerald);
    font-weight: 700;
    font-size: 0.8rem;
    padding: 4px 14px;
    border-radius: 20px;
    margin-bottom: 0.5rem;
}

.directivos-title-modern {
    font-family: var(--font-heading);
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--accent-emerald);
}

.directivos-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.directivo-card-modern {
    perspective: 1000px;
    height: 360px;
}

.card-inner-modern {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
}

.directivo-card-modern:hover .card-inner-modern {
    transform: rotateY(180deg);
}

.card-front-modern, .card-back-modern {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--border-color);
}

.card-front-modern {
    background: #ffffff;
    display: flex;
    flex-direction: column;
}

.card-image-container {
    position: relative;
    height: 240px;
    width: 100%;
}

.directivo-img-modern {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--accent-emerald);
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 12px;
}

.card-content-modern {
    padding: 1.25rem;
    text-align: center;
}

.card-title-modern {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--accent-emerald);
}

.card-role {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.card-back-modern {
    background: var(--accent-emerald);
    color: #ffffff;
    transform: rotateY(180deg);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.back-content h4 {
    color: var(--accent-gold);
    font-family: var(--font-heading);
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
}

.back-content p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

/* --------------------------------------------------------------------------
   SECCIÓN DE TÉCNICAS (CON FILTRADO Y RESPONSIVIDAD PERFECTA)
   -------------------------------------------------------------------------- */
.tecnicas-section-wrapper {
    padding: 80px 0;
    background-color: var(--bg-main);
}

.tecnicas-hero-section {
    text-align: center;
    padding: 0 20px 40px;
}

.tecnicas-hero-container {
    max-width: 800px;
    margin: 0 auto;
}

.tecnicas-badge {
    display: inline-block;
    background: var(--bg-mint-soft);
    color: var(--accent-emerald);
    font-weight: 700;
    font-size: 0.85rem;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 1rem;
}

.tecnicas-hero-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--accent-emerald);
    margin-bottom: 1rem;
}

.tecnicas-hero-desc {
    font-size: 1.05rem;
    color: var(--text-dark);
}

.tecnicas-modern-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.grado-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    border-radius: 30px;
    border: 2px solid var(--accent-emerald);
    background: #ffffff;
    color: var(--accent-emerald);
    cursor: pointer;
    transition: all 0.25s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background: var(--accent-emerald);
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(27, 77, 62, 0.25);
}

.tecnicas-grid-modern {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.tecnica-card-modern {
    background: #ffffff;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--border-color);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tecnica-card-modern:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
}

.tecnica-card-modern.hidden {
    display: none;
}

.tecnica-header {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-color);
}

.tecnica-icon {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
}

.tecnica-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--accent-emerald);
}

.tecnica-subtitle {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.tecnica-content {
    padding: 1.5rem;
}

.tecnica-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
}

.professor-details h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--accent-emerald);
}

.professor-details p {
    font-size: 0.78rem;
    color: var(--text-muted);
}

.students-count {
    text-align: right;
    background: var(--bg-main);
    padding: 4px 10px;
    border-radius: 8px;
}

.students-number {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.1rem;
    color: var(--accent-emerald);
    display: block;
}

.students-label {
    font-size: 0.7rem;
    color: var(--text-muted);
}

.titulaciones {
    margin-bottom: 1.5rem;
}

.titulacion-count {
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--accent-forest);
    letter-spacing: 0.5px;
}

.badges-group {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
}

.titulacion-badge {
    font-size: 0.75rem;
    background: var(--bg-mint-soft);
    color: var(--accent-emerald);
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 600;
}

.saber-mas-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.75rem;
    background: var(--accent-emerald);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.9rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
    transition: background 0.25s ease;
}

.saber-mas-btn:hover {
    background: var(--accent-forest);
}

/* --------------------------------------------------------------------------
   FORMULARIO PQR
   -------------------------------------------------------------------------- */
.pqr-section {
    padding: 80px 20px;
    background-color: var(--bg-secondary);
}

.pqr-container {
    max-width: 900px;
    margin: 0 auto;
    background: #ffffff;
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--border-color);
}

.pqr-header {
    text-align: center;
    margin-bottom: 2rem;
}

.pqr-header h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--accent-emerald);
    margin-bottom: 0.5rem;
}

.pqr-header p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
    margin-bottom: 1.25rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--accent-emerald);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1.5px solid var(--border-color);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--text-dark);
    background: var(--bg-main);
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-emerald);
    box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.15);
    background: #ffffff;
}

.submit-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, var(--accent-emerald), var(--accent-forest));
    color: #ffffff;
    border: none;
    border-radius: var(--radius-sm);
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-top: 1rem;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(27, 77, 62, 0.3);
}

/* --------------------------------------------------------------------------
   FOOTER
   -------------------------------------------------------------------------- */
.footer-modern {
    background: var(--accent-emerald);
    color: #ffffff;
    padding: 40px 20px 20px;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
}

.footer-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff;
    padding: 2px;
}

.footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
}

/* --------------------------------------------------------------------------
   RESPONSIVIDAD Y ADAPTABILIDAD MÓVIL
   -------------------------------------------------------------------------- */
@media (max-width: 992px) {
    .menu-toggle {
        display: flex;
    }

    .menu {
        position: fixed;
        top: 66px;
        right: -100%;
        width: 280px;
        height: calc(100vh - 66px);
        background: #ffffff;
        box-shadow: -6px 0 20px rgba(0, 0, 0, 0.1);
        padding: 2rem 1.5rem;
        transition: right 0.35s ease;
        overflow-y: auto;
    }

    .menu.active {
        right: 0;
    }

    .menu ul {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .menu ul li {
        width: 100%;
    }

    .sub-menu ul {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        padding-left: 1rem;
        display: none;
    }

    .sub-menu.open ul {
        display: block;
    }

    .main-title {
        font-size: 2.4rem;
    }

    .sobre-nosotros-content {
        grid-template-columns: 1fr;
    }

    .noticias-preview {
        grid-template-columns: 1fr;
    }
}

/* --------------------------------------------------------------------------
   LIGHTBOX MODAL DE IMÁGENES INTERACTIVAS
   -------------------------------------------------------------------------- */
.image-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.35s ease, visibility 0.35s ease;
}

.image-modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(15, 35, 26, 0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
}

.modal-window {
    position: relative;
    z-index: 2;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal-body {
    position: relative;
    max-width: 1000px;
    max-height: 80vh;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    border: 3px solid var(--accent-gold);
    background: #000;
    transform: scale(0.9);
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.image-modal.active .modal-body {
    transform: scale(1);
}

.modal-body img {
    max-width: 100%;
    max-height: 72vh;
    object-fit: contain;
    display: block;
    margin: 0 auto;
}

.modal-caption {
    background: linear-gradient(to top, rgba(27, 77, 62, 0.98), rgba(27, 77, 62, 0.85));
    color: #ffffff;
    padding: 0.85rem 1.5rem;
    text-align: center;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1rem;
    width: 100%;
    letter-spacing: 0.5px;
    border-top: 1px solid rgba(212, 175, 55, 0.4);
}

.modal-close {
    position: absolute;
    top: -45px;
    right: 0;
    background: var(--accent-gold);
    color: var(--accent-emerald);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: transform 0.2s ease, background 0.2s ease;
}

.modal-close:hover {
    transform: scale(1.15);
    background: #ffffff;
}

.modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.6);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    backdrop-filter: blur(4px);
}

.modal-prev { left: -65px; }
.modal-next { right: -65px; }

.modal-nav:hover {
    background: var(--accent-gold);
    color: var(--accent-emerald);
    border-color: var(--accent-gold);
    transform: translateY(-50%) scale(1.15);
}

@media (max-width: 768px) {
    .modal-prev { left: 10px; top: auto; bottom: -55px; transform: none; }
    .modal-next { right: 10px; top: auto; bottom: -55px; transform: none; }
    .modal-close { top: -50px; right: 10px; }
}

/* --------------------------------------------------------------------------
   BOTÓN VOLVER ARRIBA
   -------------------------------------------------------------------------- */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--accent-emerald);
    color: #ffffff;
    border: 2px solid var(--accent-gold);
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(27, 77, 62, 0.3);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--accent-forest);
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 10px 25px rgba(27, 77, 62, 0.4);
}

/* --------------------------------------------------------------------------
   CURSORES INTERACTIVOS E INDICADOR DE ZOOM EN IMÁGENES
   -------------------------------------------------------------------------- */
.galeria-herveca-img,
.directivo-img-modern,
.preview-img,
.logo-img,
.floating-logo-img {
    cursor: pointer;
    transition: transform 0.4s ease, filter 0.4s ease;
}

.galeria-herveca-item:hover .galeria-herveca-img {
    transform: scale(1.08);
    filter: brightness(1.05);
}

.galeria-herveca-overlay::after {
    content: " 🔍 Ampliar";
    display: block;
    font-size: 0.78rem;
    color: var(--accent-gold-soft);
    margin-top: 4px;
    font-weight: 500;
}
    </style>
</head>
<body>
    <header class="navbar">
        <div class="navbar-content">
            <a href="#INICIO" class="logo-brand">
                <div class="logo-img-wrapper">
                    <img src="imagenes-indexprincipal/logos/logo.jpg" alt="Escudo I.E.D. Hernán Venegas Carrillo" class="logo-img">
                </div>
                <div class="brand-text-container">
                    <span class="brand-title">Hernán Venegas Carrillo</span>
                    <span class="brand-subtitle">Institución Educativa Distrital</span>
                </div>
            </a>
            <button class="menu-toggle" aria-label="Abrir menú de navegación">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="menu">
                <ul>
                    <li><a href="#INICIO" class="nav-link active">INICIO</a></li>
                    <li><a href="#nosotros" class="nav-link">INSTITUCIÓN</a></li>
                    <li><a href="#directivos" class="nav-link">DIRECTIVOS</a></li>
                    <li><a href="#tecnicas" class="nav-link">TÉCNICAS</a></li>
                    <li class="sub-menu">
                        <a href="javascript:void(0);" class="nav-dropdown-toggle">PROYECTOS TICS ▾</a>
                        <ul>
                            <li><a href="/PATITAS/Patitas al rescate/pata/index.html">PATITAS AL RESCATE</a></li>
                            <li><a href="/abuetocaima/abuetocaima/ABUELITICS/ABUELITICS/index.html">ABUELITICS</a></li>
                            <li><a href="/NEWS/nuevo1.html">PERIÓDICO DIGITAL</a></li>
                            <li><a href="/abuetocaima/abuetocaima/TOCAIMATURISTICO/TOCAIMATURISTICO2024/tocaima-turistico/indexn.html">TOCAIMA TURÍSTICO</a></li>
                            <li><a href="/TIC/index.html">SISTEMAS TIC</a></li>
                            <li><a href="/PANELES/index.html">SAE ENERGÍA</a></li>
                            <li><a href="/APRAE/PRAE.html">PROYECTO PRAE</a></li>
                            <li><a href="/centrosensorial/proyectoapp/index.html">CENTRO SENSORIAL</a></li>
                        </ul>
                    </li>
                    <li class="sub-menu">
                        <a href="javascript:void(0);" class="nav-dropdown-toggle">DOCENTES ▾</a>
                        <ul>
                            <li><a href="cuerpoo.html">PÁGINAS DE DOCENTES</a></li>
                            <li><a href="https://gssoftwareysoluciones.com/2022/" target="_blank" rel="noopener">BOLETINES</a></li>
                            <li><a href="/Notas/indexnotas.html">TUS NOTAS</a></li>
                        </ul>
                    </li>
                    <li><a href="mallas.html" class="nav-link">CURRICULARES</a></li>
                    <li><a href="inclusionN.html" class="nav-link">INCLUSIÓN</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <!-- HERO SECTION - ULTRA ANIMADO Y DINÁMICO -->
        <section class="hero-modern" id="INICIO">
            <!-- Slider de imágenes de fondo -->
            <div class="hero-bg-container">
                <div class="bg-gradient"></div>
                <div class="bg-pattern"></div>
                <div class="hero-slider">
                    <div class="slide active" style="background-image: url('imagenes-indexprincipal/carrusel/carrusel.jpeg');"></div>
                    <div class="slide" style="background-image: url('imagenes-indexprincipal/galeria/carrusel 1.jpeg');"></div>
                    <div class="slide" style="background-image: url('imagenes-indexprincipal/galeria/carrusel 2.jpeg');"></div>
                </div>
            </div>

            <div class="hero-content-modern">
                <!-- Badge Institucional Pulsante -->
                <div class="hero-badge-pulse">
                    <span class="pulse-dot"></span>
                    <span class="badge-text-hero">✨ I.E.D. HERNÁN VENEGAS CARRILLO</span>
                </div>

                <!-- Escudo Flotante Animado con Parallax -->
                <div class="floating-logo hero-parallax" data-speed="2">
                    <div class="logo-glow"></div>
                    <img src="imagenes-indexprincipal/logos/logo.jpg" alt="Escudo I.E.D. Hernán Venegas Carrillo" class="floating-logo-img">
                </div>

                <!-- Título principal con degradado y reflejo -->
                <div class="title-container">
                    <h1 class="main-title">
                        <span class="title-word title-word-1">¡Bienvenidos!</span>
                    </h1>
                </div>

                <div class="divider-modern">
                    <div class="divider-orbit">
                        <div class="orbit-dot"></div>
                    </div>
                </div>

                <!-- Subtítulo con Animación de Texto en Movimiento -->
                <div class="subtitle-modern">
                    <p class="subtitle-text">EXCELENCIA Y TECNOLOGÍA EN TOCAIMA</p>
                </div>

                <!-- Descripción Dinámica con Estatus Morphing -->
                <div class="description-modern">
                    <p class="description-text">
                        <span id="typing-text" class="typing-text">Formando líderes con excelencia académica, valores y programas SENA.</span>
                    </p>
                </div>

                <!-- Botones CTA de Acción Rápida -->
                <div class="hero-cta-buttons">
                    <a href="#tecnicas" class="hero-btn primary-btn">
                        <span>Explorar Programas 🎓</span>
                        <div class="btn-shine"></div>
                    </a>
                    <a href="#nosotros" class="hero-btn secondary-btn">
                        <span>Conocer Institución 🏛️</span>
                    </a>
                </div>

                <!-- Estadísticas Animadas con Anillos SVG -->
                <div class="stats-circles">
                    <div class="stat-circle">
                        <div class="circle-progress">
                            <svg class="progress-svg" viewBox="0 0 100 100">
                                <circle class="circle-bg" cx="50" cy="50" r="42"/>
                                <circle class="circle-bar bar-950" cx="50" cy="50" r="42"/>
                            </svg>
                            <span class="stat-number" data-target="950">+950</span>
                        </div>
                        <span class="stat-label">Estudiantes</span>
                    </div>

                    <div class="stat-circle">
                        <div class="circle-progress">
                            <svg class="progress-svg" viewBox="0 0 100 100">
                                <circle class="circle-bg" cx="50" cy="50" r="42"/>
                                <circle class="circle-bar bar-60" cx="50" cy="50" r="42"/>
                            </svg>
                            <span class="stat-number" data-target="60">+60</span>
                        </div>
                        <span class="stat-label">Años de Trayectoria</span>
                    </div>

                    <div class="stat-circle">
                        <div class="circle-progress">
                            <svg class="progress-svg" viewBox="0 0 100 100">
                                <circle class="circle-bg" cx="50" cy="50" r="42"/>
                                <circle class="circle-bar bar-99" cx="50" cy="50" r="42"/>
                            </svg>
                            <span class="stat-number" data-target="99.9">99.9%</span>
                        </div>
                        <span class="stat-label">Satisfacción</span>
                    </div>
                </div>

                <!-- Indicadores de diapositivas del hero -->
                <div class="slider-dots">
                    <span class="dot active" data-slide="0"></span>
                    <span class="dot" data-slide="1"></span>
                    <span class="dot" data-slide="2"></span>
                </div>

                <div class="scroll-indicator-modern">
                    <a href="#nosotros" aria-label="Desplazar hacia abajo">
                        <div class="scroll-line">
                            <div class="scroll-progress"></div>
                        </div>
                        <span class="scroll-text">Desplazar</span>
                    </a>
                </div>
            </div>
            
            <div class="optimized-particles">
                <canvas id="particles-canvas"></canvas>
            </div>
        </section>

        <!-- SECCIÓN SOBRE NOSOTROS -->
        <section class="sobre-nosotros-section" id="nosotros">
            <div class="sobre-nosotros-content">
                <div class="sobre-nosotros-left">
                    <div class="blob-container">
                        <div class="blob-shape">
                            <iframe class="blob-video" src="https://www.youtube.com/embed/V-lbItf7obY" title="Matrículas I.E.D Hernán Venegas Carrillo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div class="floating-element libro-1"><span class="floating-emoji">📚</span></div>
                        <div class="floating-element lapiz-1"><span class="floating-emoji">✏️</span></div>
                        <div class="floating-element libro-2"><span class="floating-emoji">📖</span></div>
                        <div class="floating-element lapiz-2"><span class="floating-emoji">🌱</span></div>
                    </div>
                </div>
                
                <div class="sobre-nosotros-right">
                    <div class="sobre-nosotros-text">
                        <span class="section-tag">CONÓCENOS</span>
                        <h2 class="sobre-nosotros-title">Acerca de Nosotros</h2>
                        <h3 class="sobre-nosotros-subtitle">¿Por qué elegir el Colegio Hernán Venegas Carrillo?</h3>
                        <p class="sobre-nosotros-description">
                            Somos una institución educativa de alto nivel comprometida con la formación integral de nuestros estudiantes, 
                            brindando una educación de calidad que combina sólidos valores éticos, rigor académico y 
                            desarrollo tecnológico continuo. Nuestra misión es formar ciudadanos líderes, creativos y 
                            preparados para afrontar los desafíos del entorno global.
                        </p>
                        
                        <!-- Nuestros Valores -->
                        <div class="valores-container">
                            <div class="valor-item">
                                <div class="valor-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                                    </svg>
                                </div>
                                <div class="valor-info">
                                    <h4 class="valor-title">Excelencia Académica</h4>
                                    <p class="valor-desc">Enfoque pedagógico exigente y contextualizado</p>
                                </div>
                            </div>
                            
                            <div class="valor-item">
                                <div class="valor-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/>
                                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"/>
                                    </svg>
                                </div>
                                <div class="valor-info">
                                    <h4 class="valor-title">Valores Humanos</h4>
                                    <p class="valor-desc">Construcción de ciudadanía, respeto y empatía</p>
                                </div>
                            </div>
                            
                            <div class="valor-item">
                                <div class="valor-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                                    </svg>
                                </div>
                                <div class="valor-info">
                                    <h4 class="valor-title">Innovación Tecnológica</h4>
                                    <p class="valor-desc">Programas SENA en TIC, Contabilidad y Energía SAE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN NUESTRA COMUNIDAD -->
        <section class="nuestra-comunidad-section" id="comunidad">
            <div class="comunidad-container">
                <div class="comunidad-header">
                    <span class="section-tag">DOCUMENTACIÓN INSTITUCIONAL</span>
                    <h2 class="comunidad-main-title">
                        <span class="title-gradient">Nuestra</span>
                        <span class="title-outline">Comunidad</span>
                    </h2>
                </div>

                <div class="comunidad-content-grid">
                    <!-- Tarjeta 1 - Proyecto Educativo -->
                    <div class="comunidad-card" data-card="1">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-icon">📚</div>
                                <h3 class="card-title">Proyecto Educativo (PEI)</h3>
                                <p class="card-desc">Visión y horizonte pedagógico</p>
                            </div>
                            <div class="card-back">
                                <div class="card-content">
                                    <h4>PEI Institucional</h4>
                                    <p>Documento rector que fundamenta nuestra propuesta pedagógica e inclusión educativa.</p>
                                    <div class="card-stats">
                                        <div class="stat">
                                            <span class="stat-number">+60</span>
                                            <span class="stat-label">Años de Trayectoria</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="PEI2022.pdf" class="card-download-btn" target="_blank">Descargar PDF 📄</a>
                            </div>
                        </div>
                    </div>

                    <!-- Tarjeta 2 - Manual de Convivencia -->
                    <div class="comunidad-card" data-card="2">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-icon">
                                    <img src="imagenes-indexprincipal/logos/manual de convivencia.png" alt="Manual" class="card-icon-img">
                                </div>
                                <h3 class="card-title">Manual de Convivencia</h3>
                                <p class="card-desc">Derechos, deberes y pactos</p>
                            </div>
                            <div class="card-back">
                                <div class="card-content">
                                    <h4>Manual Actualizado</h4>
                                    <p>Normas de convivencia armónica para la comunidad estudiantil y docente.</p>
                                </div>
                                <a href="manual2023.pdf" class="card-download-btn" target="_blank">Descargar PDF 📄</a>
                            </div>
                        </div>
                    </div>

                    <!-- Tarjeta 3 - Sistema de Evaluación -->
                    <div class="comunidad-card" data-card="3">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-icon">📊</div>
                                <h3 class="card-title">Sistema de Evaluación (SIE)</h3>
                                <p class="card-desc">Criterios de evaluación integral</p>
                            </div>
                            <div class="card-back">
                                <div class="card-content">
                                    <h4>SIE Institucional</h4>
                                    <p>Parámetros, escalas cuantitativas y cualitativas de avance escolar.</p>
                                </div>
                                <a href="SIE2022.pdf" class="card-download-btn" target="_blank">Descargar PDF 📄</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN NOTICIAS ESCOLARES -->
        <section class="noticias-modern-section" id="noticias">
            <div class="noticias-modern-container">
                <div class="noticias-header-modern">
                    <div class="news-badge-pulse">
                        <span class="badge-text">📰 BOLETÍN E INFORMATIVO</span>
                    </div>
                    
                    <h2 class="noticias-title-modern">
                        <span class="news-title-main">Noticias</span>
                        <span class="news-title-sub">Escolares</span>
                    </h2>

                    <p class="noticias-desc-modern">
                        Mantente informado sobre los eventos, convocatorias, logros y avances de nuestra institución.
                    </p>
                </div>

                <div class="noticias-preview">
                    <div class="preview-image">
                        <img src="imagenes-indexprincipal/logos/news.png" alt="Periódico Escolar Digital" class="preview-img">
                    </div>
                    
                    <div class="preview-content">
                        <h3>Periódico Digital Herveca</h3>
                        <p>Accede a reportajes especiales, proyectos estudiantiles y la actualidad informativa de la comunidad educativa.</p>
                        
                        <div class="preview-features">
                            <div class="feature">
                                <span class="feature-icon">📖</span>
                                <span>Artículos Educativos</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">📅</span>
                                <span>Cronograma de Eventos</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">🏆</span>
                                <span>Reconocimientos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="noticias-cta-simple">
                    <a href="/NEWS/nuevo1.html" class="cta-btn-grande">
                        <span class="btn-content">
                            <span class="btn-text">Ver Periódico Escolar</span>
                            <span class="btn-arrow">→</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <!-- GALERÍA HERVECA -->
        <section class="galeria-herveca-section">
            <div class="galeria-herveca-header">
                <span class="section-tag">NUESTROS MOMENTOS</span>
                <h2 class="galeria-herveca-title">GALERÍA HERVECA</h2>
                <p class="galeria-herveca-desc">Explora las actividades pedagógicas, deportivas, técnicas y culturales de nuestra institución.</p>
            </div>
            
            <div class="galeria-herveca-grid">
                <div class="galeria-herveca-item">
                    <img src="imagenes-indexprincipal/galeria/carrusel 1.jpeg" alt="Laboratorio de Informática TIC" class="galeria-herveca-img">
                    <div class="galeria-herveca-overlay">
                        <span class="galeria-herveca-text">Tecnología TIC</span>
                    </div>
                </div>
                <div class="galeria-herveca-item">
                    <img src="imagenes-indexprincipal/galeria/carrusel 2.jpeg" alt="Proyecto Energías SAE" class="galeria-herveca-img">
                    <div class="galeria-herveca-overlay">
                        <span class="galeria-herveca-text">Energía Solar SAE</span>
                    </div>
                </div>
                <div class="galeria-herveca-item">
                    <img src="imagenes-indexprincipal/galeria/carrusel 3.jpeg" alt="Desfile Cívico y Símbolos Institucionales" class="galeria-herveca-img">
                    <div class="galeria-herveca-overlay">
                        <span class="galeria-herveca-text">Símbolos e Institución</span>
                    </div>
                </div>
                <div class="galeria-herveca-item">
                    <img src="imagenes-indexprincipal/galeria/carrusel 4.jpeg" alt="Formación Especializada" class="galeria-herveca-img">
                    <div class="galeria-herveca-overlay">
                        <span class="galeria-herveca-text">Formación Contable</span>
                    </div>
                </div>
                <div class="galeria-herveca-item">
                    <img src="imagenes-indexprincipal/galeria/carrusel 5.jpeg" alt="Proyectos SENA" class="galeria-herveca-img">
                    <div class="galeria-herveca-overlay">
                        <span class="galeria-herveca-text">Proyectos SENA</span>
                    </div>
                </div>
                <div class="galeria-herveca-item">
                    <img src="imagenes-indexprincipal/carrusel/carrusel.jpeg" alt="Campus Hernán Venegas Carrillo" class="galeria-herveca-img">
                    <div class="galeria-herveca-overlay">
                        <span class="galeria-herveca-text">Campus Principal</span>
                    </div>
                </div>
            </div>
            <a href="galeria1.html" class="galeria-herveca-more-btn">Ver más fotos 📷</a>
        </section>

        <!-- SECCIÓN DIRECTIVOS -->
        <section class="directivos-modern-section" id="directivos">
            <div class="directivos-modern-container">
                <div class="directivos-header-modern">
                    <div class="directivos-badge">
                        <span class="badge-icon">👑</span>
                        <span class="badge-text">EQUIPO LÍDER</span>
                    </div>
                    
                    <h2 class="directivos-title-modern">
                        <span class="title-main">Directivos</span>
                        <span class="title-sub">Institucionales</span>
                    </h2>

                    <p class="directivos-desc-modern">
                        Conoce al equipo directivo que orienta y lidera nuestra comunidad con vocación y excelencia.
                    </p>
                </div>

                <div class="directivos-cards-container">
                    <!-- Rector -->
                    <div class="directivo-card-modern" data-card="1">
                        <div class="card-inner-modern">
                            <div class="card-front-modern">
                                <div class="card-image-container">
                                    <img src="imagenes-indexprincipal/directivos/rector.jpg" alt="Rector Institucional" class="directivo-img-modern">
                                    <div class="card-badge">RECTORÍA</div>
                                </div>
                                <div class="card-content-modern">
                                    <h3 class="card-title-modern">Rector</h3>
                                    <p class="card-role">Dirección General</p>
                                </div>
                            </div>
                            <div class="card-back-modern">
                                <div class="back-content">
                                    <h4>Liderazgo Principal</h4>
                                    <p>Responsable de la dirección estratégica, académica y administrativa de la institución.</p>
                                    <div class="card-features">
                                        <div class="feature"><span>🎯 Dirección Estratégica</span></div>
                                        <div class="feature"><span>📊 Gestión Institucional</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Coordinadora Angela -->
                    <div class="directivo-card-modern" data-card="2">
                        <div class="card-inner-modern">
                            <div class="card-front-modern">
                                <div class="card-image-container">
                                    <img src="imagenes-indexprincipal/directivos/angela.jpg" alt="Coordinadora Angela" class="directivo-img-modern">
                                    <div class="card-badge">COORDINACIÓN</div>
                                </div>
                                <div class="card-content-modern">
                                    <h3 class="card-title-modern">Angela</h3>
                                    <p class="card-role">Coordinación Académica</p>
                                </div>
                            </div>
                            <div class="card-back-modern">
                                <div class="back-content">
                                    <h4>Gestión Académica</h4>
                                    <p>Encargada de la organización curricular, acompañamiento pedagógico y seguimiento académico.</p>
                                    <div class="card-features">
                                        <div class="feature"><span>📚 Orientación Curricular</span></div>
                                        <div class="feature"><span>⚡ Eficiencia Escolar</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Coordinador Alvaro -->
                    <div class="directivo-card-modern" data-card="3">
                        <div class="card-inner-modern">
                            <div class="card-front-modern">
                                <div class="card-image-container">
                                    <img src="imagenes-indexprincipal/directivos/alvaro.jpg" alt="Coordinador Alvaro" class="directivo-img-modern">
                                    <div class="card-badge">COORDINACIÓN</div>
                                </div>
                                <div class="card-content-modern">
                                    <h3 class="card-title-modern">Alvaro</h3>
                                    <p class="card-role">Coordinación de Procesos</p>
                                </div>
                            </div>
                            <div class="card-back-modern">
                                <div class="back-content">
                                    <h4>Convivencia y Actividades</h4>
                                    <p>Coordinador de procesos convivenciales, articulación técnica y proyectos especiales.</p>
                                    <div class="card-features">
                                        <div class="feature"><span>🔄 Convivencia Escolar</span></div>
                                        <div class="feature"><span>📅 Proyectos Técnicos</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN DE TÉCNICAS (CON ID CORREGIDO PARA NAVEGACIÓN EN DESKTOP) -->
        <section class="tecnicas-section-wrapper" id="tecnicas">
            <div class="tecnicas-hero-section">
                <div class="tecnicas-hero-container">
                    <div class="tecnicas-badge">🎓 PROGRAMAS TÉCNICOS SENA</div>
                    <h2 class="tecnicas-hero-title">
                        Técnicas Especializadas
                    </h2>
                    <p class="tecnicas-hero-desc">
                        Formación técnica de alta calidad articulada con el SENA en <strong>Tecnologías de la Información (TIC)</strong>, 
                        <strong>Contabilidad Sistematizada</strong> y <strong>Sistemas Alternos de Energía (SAE)</strong>.
                    </p>
                </div>
            </div>

            <!-- Filtro por Grados -->
            <div class="tecnicas-modern-container">
                <div class="grado-filter">
                    <button class="filter-btn active" data-grado="all">
                        📚 Todas las Técnicas
                    </button>
                    <button class="filter-btn" data-grado="decimo">
                        🎯 Décimo Grado
                    </button>
                    <button class="filter-btn" data-grado="once">
                        🚀 Undécimo Grado
                    </button>
                </div>

                <!-- Grid de Tarjetas de Técnicas -->
                <div class="tecnicas-grid-modern">
                    <!-- TIC Décimo -->
                    <div class="tecnica-card-modern" data-grado="decimo">
                        <div class="tecnica-header">
                            <div class="tecnica-icon">💻</div>
                            <h3 class="tecnica-title">TICS DÉCIMO</h3>
                            <p class="tecnica-subtitle">Tecnologías de la Información</p>
                        </div>
                        <div class="tecnica-content">
                            <div class="tecnica-info">
                                <div class="professor-details">
                                    <h4>Alvaro Rodríguez</h4>
                                    <p>Docente Especializado</p>
                                </div>
                                <div class="students-count">
                                    <span class="students-number">30</span>
                                    <span class="students-label">Estudiantes</span>
                                </div>
                            </div>
                            <div class="titulaciones">
                                <span class="titulacion-count">2 TITULACIONES</span>
                                <div class="badges-group">
                                    <span class="titulacion-badge">🎓 Técnico en TIC</span>
                                    <span class="titulacion-badge">🏆 Sistemas SENA</span>
                                </div>
                            </div>
                            <div class="tecnica-actions">
                                <a href="TIC/index.html" class="saber-mas-btn">Saber más ↗</a>
                            </div>
                        </div>
                    </div>

                    <!-- CONTABILIDAD Décimo -->
                    <div class="tecnica-card-modern" data-grado="decimo">
                        <div class="tecnica-header">
                            <div class="tecnica-icon">📊</div>
                            <h3 class="tecnica-title">CONTABILIDAD DÉCIMO</h3>
                            <p class="tecnica-subtitle">Contabilidad Sistematizada</p>
                        </div>
                        <div class="tecnica-content">
                            <div class="tecnica-info">
                                <div class="professor-details">
                                    <h4>Elsa Pinto</h4>
                                    <p>Docente Especializada</p>
                                </div>
                                <div class="students-count">
                                    <span class="students-number">30</span>
                                    <span class="students-label">Estudiantes</span>
                                </div>
                            </div>
                            <div class="titulaciones">
                                <span class="titulacion-count">1 TITULACIÓN</span>
                                <div class="badges-group">
                                    <span class="titulacion-badge">🎓 Contabilidad SENA</span>
                                </div>
                            </div>
                            <div class="tecnica-actions">
                                <a href="conta2/index.html" class="saber-mas-btn">Saber más ↗</a>
                            </div>
                        </div>
                    </div>

                    <!-- SAE Décimo -->
                    <div class="tecnica-card-modern" data-grado="decimo">
                        <div class="tecnica-header">
                            <div class="tecnica-icon">🔋</div>
                            <h3 class="tecnica-title">SAE DÉCIMO</h3>
                            <p class="tecnica-subtitle">Sistemas Alternos de Energía</p>
                        </div>
                        <div class="tecnica-content">
                            <div class="tecnica-info">
                                <div class="professor-details">
                                    <h4>Manuel Robles</h4>
                                    <p>Docente Especializado</p>
                                </div>
                                <div class="students-count">
                                    <span class="students-number">30</span>
                                    <span class="students-label">Estudiantes</span>
                                </div>
                            </div>
                            <div class="titulaciones">
                                <span class="titulacion-count">1 TITULACIÓN</span>
                                <div class="badges-group">
                                    <span class="titulacion-badge">🎓 Técnico SAE SENA</span>
                                </div>
                            </div>
                            <div class="tecnica-actions">
                                <a href="PANELES/index.html" class="saber-mas-btn">Saber más ↗</a>
                            </div>
                        </div>
                    </div>

                    <!-- TIC Undécimo -->
                    <div class="tecnica-card-modern" data-grado="once">
                        <div class="tecnica-header">
                            <div class="tecnica-icon">💻</div>
                            <h3 class="tecnica-title">TICS UNDÉCIMO</h3>
                            <p class="tecnica-subtitle">Tecnologías de la Información</p>
                        </div>
                        <div class="tecnica-content">
                            <div class="tecnica-info">
                                <div class="professor-details">
                                    <h4>Alvaro Rodríguez</h4>
                                    <p>Docente Especializado</p>
                                </div>
                                <div class="students-count">
                                    <span class="students-number">30</span>
                                    <span class="students-label">Estudiantes</span>
                                </div>
                            </div>
                            <div class="titulaciones">
                                <span class="titulacion-count">2 TITULACIONES</span>
                                <div class="badges-group">
                                    <span class="titulacion-badge">🎓 Técnico en TIC</span>
                                    <span class="titulacion-badge">🏆 Sistemas SENA</span>
                                </div>
                            </div>
                            <div class="tecnica-actions">
                                <a href="TIC/index.html" class="saber-mas-btn">Saber más ↗</a>
                            </div>
                        </div>
                    </div>

                    <!-- CONTABILIDAD Undécimo -->
                    <div class="tecnica-card-modern" data-grado="once">
                        <div class="tecnica-header">
                            <div class="tecnica-icon">📊</div>
                            <h3 class="tecnica-title">CONTABILIDAD UNDÉCIMO</h3>
                            <p class="tecnica-subtitle">Contabilidad Sistematizada</p>
                        </div>
                        <div class="tecnica-content">
                            <div class="tecnica-info">
                                <div class="professor-details">
                                    <h4>Elsa Pinto</h4>
                                    <p>Docente Especializada</p>
                                </div>
                                <div class="students-count">
                                    <span class="students-number">27</span>
                                    <span class="students-label">Estudiantes</span>
                                </div>
                            </div>
                            <div class="titulaciones">
                                <span class="titulacion-count">1 TITULACIÓN</span>
                                <div class="badges-group">
                                    <span class="titulacion-badge">🎓 Contabilidad SENA</span>
                                </div>
                            </div>
                            <div class="tecnica-actions">
                                <a href="conta2/index.html" class="saber-mas-btn">Saber más ↗</a>
                            </div>
                        </div>
                    </div>

                    <!-- SAE Undécimo -->
                    <div class="tecnica-card-modern" data-grado="once">
                        <div class="tecnica-header">
                            <div class="tecnica-icon">🔋</div>
                            <h3 class="tecnica-title">SAE UNDÉCIMO</h3>
                            <p class="tecnica-subtitle">Sistemas Alternos de Energía</p>
                        </div>
                        <div class="tecnica-content">
                            <div class="tecnica-info">
                                <div class="professor-details">
                                    <h4>Manuel Robles</h4>
                                    <p>Docente Especializado</p>
                                </div>
                                <div class="students-count">
                                    <span class="students-number">21</span>
                                    <span class="students-label">Estudiantes</span>
                                </div>
                            </div>
                            <div class="titulaciones">
                                <span class="titulacion-count">1 TITULACIÓN</span>
                                <div class="badges-group">
                                    <span class="titulacion-badge">🎓 Técnico SAE SENA</span>
                                </div>
                            </div>
                            <div class="tecnica-actions">
                                <a href="PANELES/index.html" class="saber-mas-btn">Saber más ↗</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN PQR -->
        <section class="pqr-section" id="pqr">
            <div class="pqr-container">
                <div class="pqr-header">
                    <h2>Preguntas, Quejas, Reclamos y Sugerencias (PQR)</h2>
                    <p>Envía tus solicitudes a las coordinaciones o rectoría institucional.</p>
                </div>
                
                <form id="pqrForm" action="submit_pqr.php" method="POST">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nombre">Nombre Completo:</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Nombres y Apellidos" required>
                        </div>
                        <div class="form-group">
                            <label for="celular">Número de Celular:</label>
                            <input type="tel" id="celular" name="celular" placeholder="Ej: 310 000 0000" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="sede">Sede Institucional:</label>
                            <select id="sede" name="sede" required>
                                <option value="">Seleccione una sede</option>
                                <option value="Principal I.E.D Hernán Venegas Carrillo">Principal I.E.D Hernán Venegas Carrillo</option>
                                <option value="Escuela Rural Guacaná">Escuela Rural Guacaná</option>
                                <option value="Escuela Rural Acuata">Escuela Rural Acuata</option>
                                <option value="Escuela Rural La Colorada">Escuela Rural La Colorada</option>
                                <option value="Escuela Rural El Portillo">Escuela Rural El Portillo</option>
                                <option value="Escuela Rural Vasquez">Escuela Rural Vasquez</option>
                                <option value="Escuela Rural Armenia">Escuela Rural Armenia</option>
                                <option value="I.E.D Rural El Copó">I.E.D Rural El Copó</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="jornada">Jornada:</label>
                            <select id="jornada" name="jornada" required>
                                <option value="">Seleccione una jornada</option>
                                <option value="Mañana">Mañana</option>
                                <option value="Única">Única</option>
                                <option value="Fin de Semana">Fin de Semana</option>
                                <option value="Ninguna">Ninguna</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="asunto">Tipo de Solicitud:</label>
                            <select id="asunto" name="asunto" required>
                                <option value="">Seleccione asunto</option>
                                <option value="Pregunta">Pregunta / Consulta</option>
                                <option value="Queja">Queja</option>
                                <option value="Reclamo o sugerencia">Reclamo o Sugerencia</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="dirigido">Dirigido a:</label>
                            <select id="dirigido" name="dirigido" required>
                                <option value="">Seleccione el destinatario</option>
                                <option value="Coordinación primaria">Coordinación Primaria</option>
                                <option value="Coordinación secundaria">Coordinación Secundaria</option>
                                <option value="Rectoría">Rectoría</option>
                                <option value="Orientación académica">Orientación Académica</option>
                                <option value="Secretaría">Secretaría</option>
                            </select>
                        </div>
                        <div class="form-group full-width">
                            <label for="comentario">Comentario o Detalle:</label>
                            <textarea id="comentario" name="comentario" placeholder="Escriba aquí los detalles de su solicitud..." rows="4" required></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" class="submit-btn">ENVIAR SOLICITUD ✉️</button>
                </form>
            </div> 
        </section>
    </main>

    <!-- FOOTER INSTITUCIONAL -->
    <footer class="footer-modern">
        <div class="footer-container">
            <div class="footer-brand">
                <img src="imagenes-indexprincipal/logos/logo.jpg" alt="Logo Colegio Hernán Venegas Carrillo" class="footer-logo">
                <div>
                    <h3>Colegio Hernán Venegas Carrillo</h3>
                    <p>Institución Educativa Distrital - Tocaima, Cundinamarca</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Colegio Hernán Venegas Carrillo. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- MODAL LIGHTBOX PARA IMÁGENES INTERACTIVAS -->
    <div id="image-modal" class="image-modal" aria-hidden="true" role="dialog">
        <div class="modal-backdrop"></div>
        <div class="modal-window">
            <button class="modal-close" id="modal-close-btn" aria-label="Cerrar vista">&times;</button>
            <button class="modal-nav modal-prev" id="modal-prev-btn" aria-label="Anterior">❮</button>
            <button class="modal-nav modal-next" id="modal-next-btn" aria-label="Siguiente">❯</button>
            <div class="modal-body">
                <img id="modal-img" src="" alt="Vista previa en alta resolución">
                <div id="modal-caption" class="modal-caption"></div>
            </div>
        </div>
    </div>

    <!-- BOTÓN FLOTANTE VOLVER ARRIBA -->
    <button id="back-to-top" class="back-to-top" aria-label="Volver arriba">
        ▲
    </button>

    <!-- JAVASCRIPT EMBEBIDO EN EL MISMO ARCHIVO HTML -->
    <script>
document.addEventListener('DOMContentLoaded', () => {
    // 1. MENÚ MÓVIL TOGGLE
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        document.querySelectorAll('.menu a:not(.nav-dropdown-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // Submenús móviles
    const dropdownToggles = document.querySelectorAll('.sub-menu > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parentLi = toggle.parentElement;
                parentLi.classList.toggle('open');
            }
        });
    });

    // 2. SLIDER DE FOTOS DE FONDO DEL HERO
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    let slideTimer;

    function goToSlide(index) {
        if (!slides.length) return;
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    if (slides.length > 0) {
        slideTimer = setInterval(nextSlide, 5000);

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                clearInterval(slideTimer);
                goToSlide(idx);
                slideTimer = setInterval(nextSlide, 5000);
            });
        });
    }

    // 3. MÁQUINA DE ESCRIBIR / MORPHING TEXT EN HERO
    const typingElem = document.getElementById('typing-text');
    const phrases = [
        "Formando líderes con excelencia académica, valores y programas SENA.",
        "Formación especializada en TIC, Contabilidad y Sistemas de Energía SAE.",
        "Construyendo el futuro integral de nuestra comunidad educativa en Tocaima."
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElem) return;
        const currentPhrase = phrases[phraseIdx];

        if (isDeleting) {
            typingElem.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typingElem.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIdx === currentPhrase.length) {
            speed = 3000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // 4. PARALLAX INTERACTIVO EN HERO SEGÚN EL MOUSE
    const heroSection = document.querySelector('.hero-modern');
    const parallaxLogo = document.querySelector('.hero-parallax');

    if (heroSection && parallaxLogo) {
        heroSection.addEventListener('mousemove', (e) => {
            const speed = parseFloat(parallaxLogo.getAttribute('data-speed')) || 2;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            parallaxLogo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    }

    // 5. ANIMACIÓN DE NÚMEROS ESTADÍSTICOS Y ANILLOS SVG
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !animated) {
            animated = true;
            
            const bar950 = document.querySelector('.bar-950');
            const bar60 = document.querySelector('.bar-60');
            const bar99 = document.querySelector('.bar-99');

            if (bar950) bar950.style.strokeDashoffset = '20';
            if (bar60) bar60.style.strokeDashoffset = '40';
            if (bar99) bar99.style.strokeDashoffset = '2';

            statNumbers.forEach(stat => {
                const targetStr = stat.getAttribute('data-target');
                if (!targetStr) return;
                
                const target = parseFloat(targetStr);
                const isPlus = stat.textContent.includes('+');
                const isPercent = stat.textContent.includes('%');

                let count = 0;
                const duration = 2000;
                const increment = target / (duration / 16);

                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                    }
                    let formatted = target % 1 !== 0 ? count.toFixed(1) : Math.floor(count);
                    if (isPlus) formatted = '+' + formatted;
                    if (isPercent) formatted = formatted + '%';
                    stat.textContent = formatted;
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats();

    // 6. VISOR MODAL LIGHTBOX PARA IMÁGENES INTERACTIVAS
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalClose = document.getElementById('modal-close-btn');
    const modalPrev = document.getElementById('modal-prev-btn');
    const modalNext = document.getElementById('modal-next-btn');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    const galleryItems = document.querySelectorAll('.galeria-herveca-item, .directivo-img-modern, .preview-img, .logo-img, .floating-logo-img');
    const imageList = [];

    galleryItems.forEach((item) => {
        let imgElem, captionText;
        
        if (item.tagName === 'IMG') {
            imgElem = item;
            captionText = item.alt || 'Colegio Hernán Venegas Carrillo';
        } else {
            imgElem = item.querySelector('img');
            const overlayText = item.querySelector('.galeria-herveca-text');
            captionText = overlayText ? overlayText.textContent : (imgElem ? imgElem.alt : 'Colegio Hernán Venegas Carrillo');
        }

        if (imgElem) {
            imageList.push({
                src: imgElem.src,
                caption: captionText
            });

            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(imageList.findIndex(img => img.src === imgElem.src));
            });
        }
    });

    let currentIndex = 0;

    function openModal(index) {
        if (index < 0 || index >= imageList.length) return;
        currentIndex = index;
        const item = imageList[currentIndex];
        
        modalImg.src = item.src;
        modalCaption.textContent = item.caption;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        openModal(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % imageList.length;
        openModal(currentIndex);
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (modalPrev) modalPrev.addEventListener('click', showPrev);
    if (modalNext) modalNext.addEventListener('click', showNext);

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // 7. BOTÓN FLOTANTE VOLVER ARRIBA
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 8. FILTRADO DE TÉCNICAS POR GRADO
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tecnicaCards = document.querySelectorAll('.tecnica-card-modern');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedGrado = btn.getAttribute('data-grado');

            tecnicaCards.forEach(card => {
                const cardGrado = card.getAttribute('data-grado');
                if (selectedGrado === 'all' || cardGrado === selectedGrado) {
                    card.classList.remove('hidden');
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 9. PARTICULAS INTERACTIVAS Y RED DE CONEXIONES EN CANVAS
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        const particles = [];
        const particleCount = 40;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                alpha: Math.random() * 0.6 + 0.3
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
                ctx.fill();

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        drawParticles();

        window.addEventListener('resize', () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        });
    }

    // 10. TILTING 3D EN TARJETAS
    const tiltCards = document.querySelectorAll('.tecnica-card-modern, .valor-item');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (-y / rect.height) * 8;
            const rotateY = (x / rect.width) * 8;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // 11. NAVEGACIÓN ACTIVA EN SCROLL
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
    </script>
</body>
</html>
