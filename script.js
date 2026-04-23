// 1. ABRIR SOBRE
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const wrapper = document.getElementById('envelope-wrapper');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('miMusica');

    envelope.classList.add('open');

    setTimeout(() => {
        wrapper.style.transform = 'translateY(-110%)';
        wrapper.style.opacity = '0';
        mainContent.style.display = 'block';
        setTimeout(() => { mainContent.style.opacity = '1'; }, 100);
        if (audio) audio.play();
    }, 800);
}

// 2. INICIALIZAR CARRUSELES
const swiperPadrinos = new Swiper('.swiper-padrinos', {
    loop: true,
    navigation: { nextEl: '.swiper-padrinos .swiper-button-next', prevEl: '.swiper-padrinos .swiper-button-prev' },
});

const swiperItinerario = new Swiper('.swiper-itinerario', {
    loop: true,
    navigation: { nextEl: '.swiper-itinerario .swiper-button-next', prevEl: '.swiper-itinerario .swiper-button-prev' },
});

// 3. CUENTA REGRESIVA
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
