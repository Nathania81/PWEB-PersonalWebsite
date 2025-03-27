document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header nav ul li a[href^='#']");
    
    navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
    let currentSectionId = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 4)) {
        currentSectionId = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
        }
    });
});

    const contactForm = document.querySelector("section#contact form");
    if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameField = contactForm.querySelector("input[type='text']");
        const emailField = contactForm.querySelector("input[type='text'] + input, input[name='email']") || contactForm.querySelector("input[type='text']:nth-of-type(2)");
        const messageField = contactForm.querySelector("textarea[name='message']") || contactForm.querySelector("textarea");

        let isValid = true;

        [nameField, emailField, messageField].forEach(field => {
        if (!field || field.value.trim() === "") {
            field.style.border = "2px solid red";
            isValid = false;
        } else {
            field.style.border = "";
        }
        });

        if (!isValid) {
        alert("Please fill in all fields!");
        } else {

        alert("Thank you for your message!");
        contactForm.reset();
        }
    });
    }
});