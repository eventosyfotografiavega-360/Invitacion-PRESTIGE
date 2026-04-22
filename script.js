function openEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    const content = document.getElementById('main-content');
    
    wrapper.style.opacity = '0';
    setTimeout(() => {
        wrapper.style.visibility = 'hidden';
        content.style.opacity = '1'; // Esto hace que el contenido aparezca suavemente
        // Si tienes música, aquí es donde debe empezar
        if (typeof musica !== 'undefined') musica.play();
    }, 1000);
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('menu-visible');
}

// Inicializar el slider de Padrinos
const swiper = new Swiper('.swiper-padrinos', {
    pagination: { el: '.swiper-pagination' },
    loop: true,
});
