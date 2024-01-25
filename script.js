document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
    
            const target = document.querySelector(this.getAttribute('href'));
    
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });
});

const navLinks = document.querySelector(".nav-links");
function onToggleMenu() {
    navLinks.classList.toggle("top-0");
}

