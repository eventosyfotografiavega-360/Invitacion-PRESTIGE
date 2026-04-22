function openEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    const content = document.getElementById('main-content');
    const musica = document.getElementById('miMusica');

    wrapper.style.transform = 'translateY(-100%)';
    wrapper.style.opacity = '0';
    
    setTimeout(() => {
        wrapper.style.display = 'none';
        content.style.opacity = '1';
        if (musica) musica.play();
    }, 1000);
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('menu-visible');
}
