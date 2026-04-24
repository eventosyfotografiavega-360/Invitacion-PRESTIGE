// ==========================================
// 1. ABRIR SOBRE INTERACTIVO
// ==========================================
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const wrapper = document.getElementById('envelope-wrapper');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('miMusica');

    // Activa la animación 3D de la solapa
    envelope.classList.add('open');

    // Espera a que termine la animación de la solapa para deslizar todo el sobre
    setTimeout(() => {
        wrapper.style.transform = 'translateY(-110%)';
        wrapper.style.opacity = '0';
        
        // Muestra el contenido principal suavemente
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);

        // Intenta reproducir la música si está disponible
        if (audio) {
            audio.play().catch(error => {
                console.log("Auto-play de música bloqueado por el navegador.");
            });
        }
    }, 800); // 800ms es el tiempo de la animación de la solapa
}


// ==========================================
// 2. INICIALIZAR CARRUSELES (Swiper.js)
// ==========================================

// Swiper 1: Padrinos (usando flechas internas unificadas)
const swiperPadrinos = new Swiper('.swiper-padrinos', {
    loop: true,
    navigation: {
        nextEl: '.swiper-padrinos .swiper-button-next',
        prevEl: '.swiper-padrinos .swiper-button-prev',
    },
    // Puedes habilitar autoplay si lo deseas
    // autoplay: { delay: 5000 },
});

// Swiper 2: ITINERARIO (Mismo estilo de flechas internas unificadas)
const swiperItinerario = new Swiper('.swiper-itinerario', {
    loop: true,
    navigation: {
        nextEl: '.swiper-itinerario .swiper-button-next',
        prevEl: '.swiper-itinerario .swiper-button-prev',
    },
});

// Swiper 3: NUESTRA HISTORIA (Con Paginación de puntos)
const swiperHistoria = new Swiper('.swiper-historia', {
    loop: true,
    pagination: { 
        el: '.swiper-pagination', 
        clickable: true 
    },
    navigation: {
        nextEl: '.swiper-historia .swiper-button-next',
        prevEl: '.swiper-historia .swiper-button-prev',
    },
});


// ==========================================
// 3. DESPLEGAR BUENOS DESEOS
// ==========================================
function toggleWishes() {
    const list = document.getElementById('wishes-list');
    // Alterna entre mostrar u ocultar el contenedor con flexbox
    if (list.style.display === 'none') {
        list.style.display = 'flex';
        // Scroll suave hacia la lista al abrir
        list.scrollIntoView({ behavior: 'smooth' });
    } else {
        list.style.display = 'none';
    }
}


// ==========================================
// 4. CONTADOR REGRESIVO
// ==========================================
// Fecha objetivo: Sábado 22 de Agosto 2026, 6:00 PM (18:00)
const weddingDate = new Date("August 22, 2026 18:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    // Referencias a los elementos del HTML
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secsEl = document.getElementById("secs");

    // Si los elementos existen en la página, actualizamos
    if (daysEl && hoursEl && minsEl && secsEl) {
        if (diff < 0) {
            document.getElementById("countdown-section").innerHTML = "<div class='elegant-card'><h2 class='script-oro'>¡LLEGÓ EL DÍA!</h2></div>";
            return;
        }

        // Cálculos matemáticos del tiempo restante
        daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        hoursEl.innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minsEl.innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        secsEl.innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
};

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar una vez al inicio
