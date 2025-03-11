// js/main.js
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) { // Uso de optional chaining para evitar errores si el formulario no existe
    e.preventDefault();
    const email = this.querySelector('input').value;

    if (validateEmail(email)) {
        alert('¡Gracias por suscribirte!');
        this.reset();
    } else {
        alert('Por favor ingresa un email válido');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Scroll suave
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});