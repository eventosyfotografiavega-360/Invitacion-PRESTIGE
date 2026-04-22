function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const wrapper = document.getElementById('envelope-wrapper');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('miMusica');

    // 1. Inicia la animación de la solapa
    envelope.classList.add('open');

    // 2. Espera a que la solapa se abra y luego desliza todo el sobre
    setTimeout(() => {
        wrapper.style.transform = 'translateY(-100%)';
        wrapper.style.opacity = '0';
        
        // 3. Muestra el contenido principal
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);

        // 4. Inicia la música
        if (audio) audio.play();
    }, 800); // Tiempo que tarda en abrirse la solapa
}

// (Mantenemos tu código de Swiper y Contador abajo)
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
