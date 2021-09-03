const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('hidden-navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})
