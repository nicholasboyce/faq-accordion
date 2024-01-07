const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => item.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle("active");
}));