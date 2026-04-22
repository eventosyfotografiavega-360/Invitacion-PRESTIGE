// ==========================================
// 1. ABRIR SOBRE (Paso al Inicio)
// ==========================================
function openEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    const content = document.getElementById('main-content');
    const audio = document.getElementById('miMusica');

    // Animación Premium: Deslizar hacia arriba cubic-bezier
    wrapper.style.transform = 'translateY(-110%)';
    
    setTimeout(() => {
        wrapper.style.display = 'none';
        content.style.opacity = '1';
        // Iniciar la música automáticamente al abrir (si existe el archivo)
        if (audio) audio.play();
    }, 1200);
}


// ==========================================
// 2. INICIALIZAR CARRUSEL DE PADRINOS (Swiper.js)
// ==========================================
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


// ==========================================
// 3. CONTADOR REGRESIVO (Boda Alicia y Mario)
// ==========================================
// Fecha objetivo: Sábado 22 de Agosto 2026, 6:00 PM (18:00)
const weddingDate = new Date("August 22, 2026 18:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secsEl = document.getElementById("secs");

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
