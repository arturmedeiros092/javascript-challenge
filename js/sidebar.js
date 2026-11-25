const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('icon-close');
const openButton = document.getElementById('icon-open');

function toggleSidebar() {

    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('flex');

    openButton.classList.toggle('hidden');
    openButton.classList.toggle('block');
    closeButton.classList.toggle('hidden');
    closeButton.classList.toggle('block');
}

menuButton.addEventListener('click', toggleSidebar);

const links = sidebar.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('hidden') && window.innerWidth < 768) {
            toggleSidebar();
        }
    });
});
