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

        // Intenta reproducir la música
        if (audio) audio.play();
    }, 800); // 800ms es el tiempo de la animación de la solapa
}


// ==========================================
// 2. INICIALIZAR CARRUSELES (Swiper.js)
// ==========================================

// Swiper 1: Padrinos (con paginación de puntos)
const swiperPadrinos = new Swiper('.swiper-padrinos', {
    loop: true,
    pagination: { 
        el: '.swiper-pagination', 
        clickable: true 
    },
    autoplay: { 
        delay: 5000 
    },
    effect: 'slide',
});

// Swiper 2: ITINERARIO (NUEVO - Estilo exacto de fotos, con flechas)
const swiperItinerario = new Swiper('.swiper-itinerario', {
    loop: true, // Carrusel infinito
    effect: 'slide', // Efecto de deslizamiento simple y limpio
    // Activamos la navegación con las flechas personalizadas que pusimos en el HTML
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // NO incluimos paginación (puntos) para copiar el estilo de las fotos de ejemplo
});


// ==========================================
// 3. CONTADOR REGRESIVO (Alicia y Mario)
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
