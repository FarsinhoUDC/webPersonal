
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


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valido = true;


  const nombre = document.getElementById("name");
  if (nombre.value.trim().length < 2) {
    mostrarError(nombre);
    valido = false;
  } else {
    ocultarError(nombre);
  }


  const email = document.getElementById("email");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    mostrarError(email);
    valido = false;
  } else {
    ocultarError(email);
  }


  const telefono = document.getElementById("phone");
  if (!/^\+?[\d\s\-]{7,15}$/.test(telefono.value.trim())) {
    mostrarError(telefono);
    valido = false;
  } else {
    ocultarError(telefono);
  }


  const mensaje = document.getElementById("message");
  if (mensaje.value.trim().length < 10) {
    mostrarError(mensaje);
    valido = false;
  } else {
    ocultarError(mensaje);
  }


  if (valido) {
    document.getElementById("submitSuccessMessage").classList.remove("oculto");
    document.getElementById("submitErrorMessage").classList.add("oculto");
    this.reset();
  } else {
    document.getElementById("submitErrorMessage").classList.remove("oculto");
    document.getElementById("submitSuccessMessage").classList.add("oculto");
  }
});

function mostrarError(campo) {
  campo.closest(".campo-flotante").querySelector(".campo-error").style.display = "block";
  campo.style.borderColor = "red";
}

function ocultarError(campo) {
  campo.closest(".campo-flotante").querySelector(".campo-error").style.display = "none";
  campo.style.borderColor = "";
}