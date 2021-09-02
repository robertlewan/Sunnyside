const toggleButton = document.getElementById('toggle');
const navbarLink = document.getElementById('hidden-navbar');

console.log(toggleButton);

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active');
})