const toggleButton = document.getElementById('toggle');
const navbarLink = document.getElementById('hidden-navbar');
toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active');
})