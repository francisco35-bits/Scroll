const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Suponiendo que los elementos ocultos tienen una clase "hidden"
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observe.observe(el));
