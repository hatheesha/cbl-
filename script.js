const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle 'active' class
    menuToggle.classList.toggle('active'); // Toggle 'active' class for the button
});

