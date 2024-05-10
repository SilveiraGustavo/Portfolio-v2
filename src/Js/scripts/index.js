document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById('navbar-default');


function closeMenu() {
    menu.classList.add('hidden');
}
button.addEventListener('click', function() {
    menu.classList.toggle('hidden');
});
document.body.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideButton = button.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideButton) {
        closeMenu();
    }
    });
});