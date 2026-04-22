// ABRIR SOBRE
function openEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    const content = document.getElementById('main-content');
    const musica = document.getElementById('miMusica');

    wrapper.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        wrapper.style.display = 'none';
        content.style.opacity = '1';
        if (musica) musica.play();
    }, 1000);
}

// MENÚ
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('menu-visible');
}

// MODAL RSVP
function openRSVP() { document.getElementById('rsvp-modal').style.display = 'flex'; }
function closeRSVP() { document.getElementById('rsvp-modal').style.display = 'none'; }

function sendWhatsApp() {
    const pases = document.getElementById('pases-input').value;
    const msg = `¡Hola! Confirmo mi asistencia para ${pases} personas.`;
    window.open(`https://wa.me/528771378433?text=${encodeURIComponent(msg)}`);
}

// CONTADOR
const target = new Date("March 18, 2026 17:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = target - now;
    document.getElementById("days").innerText = Math.floor(d / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("mins").innerText = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("secs").innerText = Math.floor((d % (1000 * 60)) / 1000);
}, 1000);
