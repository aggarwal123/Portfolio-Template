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

function onToggleMenu(icon) {
    const navLinks = document.querySelector(".nav-links");
    const isMenuOpen = navLinks.classList.contains("top-0");
    const menuIcon = document.getElementById("MenuIcon");
    if (isMenuOpen) {
        navLinks.classList.remove("top-0");
    } else {
        navLinks.classList.add("top-0");
    }
    if (menuIcon.name == "menu"){
        menuIcon.setAttribute("name", "close");
    } else {
        menuIcon.setAttribute("name", "menu");
    }
}

