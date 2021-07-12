function openMenu(menu) {
    console.log("Opening menu");
    menu.classList.replace('closed', 'open');
    document.getElementById('open-menu-button').innerHTML = "Close Menu";
}

function closeMenu(menu) {
    console.log("Closing menu");
    menu.classList.replace('open', 'closed');
    document.getElementById('open-menu-button').innerHTML = "Open Menu";
}

function toggleMenu(e) {
    e && e.preventDefault();
    e && e.stopPropagation();

    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        closeMenu(menu);
    } else {
        openMenu(menu);
    }
}
