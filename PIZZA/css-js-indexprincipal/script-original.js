document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. MENÚ MÓVIL TOGGLE
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 2. SLIDER DE FOTOS DE FONDO DEL HERO
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 3. MÁQUINA DE ESCRIBIR / MORPHING TEXT EN HERO
    // --------------------------------------------------------------------------
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
            speed = 3000; // Pausa al completar la frase
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // --------------------------------------------------------------------------
    // 4. PARALLAX INTERACTIVO EN HERO SEGÚN EL MOUSE
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 5. ANIMACIÓN DE NÚMEROS ESTADÍSTICOS Y ANILLOS SVG
    // --------------------------------------------------------------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !animated) {
            animated = true;
            
            // Animar Anillos SVG
            const bar950 = document.querySelector('.bar-950');
            const bar60 = document.querySelector('.bar-60');
            const bar99 = document.querySelector('.bar-99');

            if (bar950) bar950.style.strokeDashoffset = '20';  // ~92%
            if (bar60) bar60.style.strokeDashoffset = '40';    // ~85%
            if (bar99) bar99.style.strokeDashoffset = '2';     // ~99%

            // Animar Contadores
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

    // --------------------------------------------------------------------------
    // 6. VISOR MODAL LIGHTBOX PARA IMÁGENES INTERACTIVAS
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 7. BOTÓN FLOTANTE VOLVER ARRIBA
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 8. FILTRADO DE TÉCNICAS POR GRADO
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 9. PARTICULAS INTERACTIVAS Y RED DE CONEXIONES EN CANVAS
    // --------------------------------------------------------------------------
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

                // Conectar partículas cercanas con líneas suaves
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

    // --------------------------------------------------------------------------
    // 10. TILTING 3D EN TARJETAS
    // --------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------
    // 11. NAVEGACIÓN ACTIVA EN SCROLL
    // --------------------------------------------------------------------------
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
