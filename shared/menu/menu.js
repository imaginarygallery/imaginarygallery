function openMenu(menu) {
    console.log("Opening menu");
    menu.classList.replace('closed', 'open');
}

function closeMenu(menu) {
    console.log("Closing menu");
    menu.classList.replace('open', 'closed');
}

function toggleMenu(e) {
    e && e.preventDefault();
    e && e.stopPropagation();

    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        openMenu(menu);
    } else {
        closeMenu(menu);
    }
}
