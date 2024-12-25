// Extracted from your provided JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector('.hero-content');
    const projectItems = document.querySelectorAll('.project-item');
    const formItems = document.querySelectorAll('form input, form textarea, form button');

    heroContent.classList.add('active');
    
    projectItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 200);
    });

    formItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
});