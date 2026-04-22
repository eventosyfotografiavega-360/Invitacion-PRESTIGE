// Abrir el sobre al inicio
function openEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    wrapper.style.opacity = '0';
    setTimeout(() => {
        wrapper.style.visibility = 'hidden';
        // Aquí podrías iniciar la música automáticamente al abrir
        if (musica.paused) musica.play();
    }, 1000);
}

// Menú lateral
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('menu-visible');
}

// Inicializar el slider de Padrinos
const swiperPadrinos = new Swiper('.swiper-padrinos', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    autoplay: { delay: 3000 },
});
