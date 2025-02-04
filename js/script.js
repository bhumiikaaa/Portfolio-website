document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll(".project-card, .experience, .achievements").forEach(card => {
            card.classList.toggle("dark-mode");
        });

        darkModeToggle.innerText = document.body.classList.contains("dark-mode") 
            ? "☀️ Light Mode" 
            : "🌙 Dark Mode";
    });

    // Smooth Scroll Effect
    const sections = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Typing Effect
    const typingElement = document.querySelector(".typing-text");
    const textArray = ["Web Developer", "AI Enthusiast", "Tech Speaker"];
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textArray[textIndex].length) {
            typingElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 100);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }

    setTimeout(typeEffect, 500);
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            e.preventDefault();
        }
    });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    
    // Function to check visibility of sections
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('show-section');
            }
        });
    }

    // Check visibility on page load and on scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case sections are already visible
});
