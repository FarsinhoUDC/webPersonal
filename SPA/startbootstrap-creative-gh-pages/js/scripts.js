/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    gsap.to(document.getElementById("myName"), {
        duration: 2, 
        scrambleText: {
        text: "Juan Pablo Medina Bolanios", 
        chars: "010", 
        revealDelay: 1, 
        speed: 0.2 
        },
        onComplete: () => {
        // Esta arranca cuando termina el scramble
        gsap.to("#myName", {
            duration: 2,
            opacity: 0.7,
            yoyo: true,        // regresa al estado original
            repeat: -1         // -1 = infinito
        });
    }
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

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

