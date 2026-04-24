// 1. ABRIR SOBRE INTERACTIVO
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const wrapper = document.getElementById('envelope-wrapper');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('miMusica');

    // Activa la animación 3D de la solapa
    envelope.classList.add('open');

    // Espera a que termine la animación de la solapa
    setTimeout(() => {
        wrapper.style.transform = 'translateY(-110%)';
        wrapper.style.opacity = '0';
        mainContent.style.display = 'block';
        setTimeout(() => { mainContent.style.opacity = '1'; }, 100);
        if (audio) audio.play();
    }, 800);
}

// 2. INICIALIZAR CARRUSELES (Swiper.js)
const swiperPadrinos = new Swiper('.swiper-padrinos', { loop: true, navigation: { nextEl: '.swiper-padrinos .swiper-button-next', prevEl: '.swiper-padrinos .swiper-button-prev' } });
const swiperItinerario = new Swiper('.swiper-itinerario', { loop: true, navigation: { nextEl: '.swiper-itinerario .swiper-button-next', prevEl: '.swiper-itinerario .swiper-button-prev' } });
const swiperHistoria = new Swiper('.swiper-historia', { loop: true, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-historia .swiper-button-next', prevEl: '.swiper-historia .swiper-button-prev' } });

// 3. DESPLEGAR BUENOS DESEOS
function toggleWishes() {
    const list = document.getElementById('wishes-list');
    list.style.display = (list.style.display === 'none') ? 'flex' : 'none';
}

// 4. CONTADOR REGRESIVO
const weddingDate = new Date("August 22, 2026 18:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    if (diff > 0) {
        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("mins").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("secs").innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
}, 1000);
