function openEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    const content = document.getElementById('main-content');
    const audio = document.getElementById('miMusica');

    wrapper.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        wrapper.style.display = 'none';
        content.style.opacity = '1';
        if (audio) audio.play();
    }, 1000);
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('menu-visible');
}

function openRSVP() { document.getElementById('rsvp-modal').style.display = 'flex'; }
function closeRSVP() { document.getElementById('rsvp-modal').style.display = 'none'; }

function sendToWhatsApp() {
    const pases = document.getElementById('guest-count').value;
    const mensaje = encodeURIComponent(`¡Hola Elizabeth! Confirmo mi asistencia para ${pases} pases.`);
    window.open(`https://wa.me/528771378433?text=${mensaje}`);
}

// Contador corregido (Fecha futura)
const targetDate = new Date("March 18, 2027 17:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("mins").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("secs").innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
}, 1000);
