
window.addEventListener('DOMContentLoaded', event => {
    gsap.registerPlugin(ScrambleTextPlugin);
    gsap.to(document.getElementById("myName"), {
        duration: 2, 
        scrambleText: {
        text: "Juan Pablo Medina Bolanios", 
        chars: "010", 
        revealDelay: 1, 
        speed: 0.2 ,
        },
        onComplete: () => {
        // Esta arranca cuando termina el scramble
        gsap.to("#myName", {
            duration: 2,
            opacity: 0.44,
            yoyo: true,        // regresa al estado original
            repeat: -1         // -1 = infinito
        });
    }
    });
});


    const estadoCarruseles = {};

    function moverCarrusel(id, direccion) {
        const carrusel = document.getElementById(id);
        const track = carrusel.querySelector('.mi-carrusel-track');
        const total = track.querySelectorAll('img').length;

        if (!estadoCarruseles[id]) estadoCarruseles[id] = 0;

        estadoCarruseles[id] = (estadoCarruseles[id] + direccion + total) % total;
        track.style.transform = `translateX(-${estadoCarruseles[id] * 100}%)`;
  }


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    // Reset estados
    [name, email, phone, message].forEach(input => {
        input.classList.remove("is-invalid");
    });

    // Validación nombre
    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isValid = false;
    }

    // Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
    }

    // Validación teléfono
    if (phone.value.trim().length < 7) {
        phone.classList.add("is-invalid");
        isValid = false;
    }

    // Validación mensaje
    if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        isValid = false;
    }

    // Mostrar resultado
    if (isValid) {
        document.getElementById("submitSuccessMessage").classList.remove("d-none");
        document.getElementById("submitErrorMessage").classList.add("d-none");
        form.reset();
    } else {
        document.getElementById("submitErrorMessage").classList.remove("d-none");
        document.getElementById("submitSuccessMessage").classList.add("d-none");
    }
});