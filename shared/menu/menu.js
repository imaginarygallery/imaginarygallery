function openMenu(menu) {
    console.log("Opening menu");
    menu.classList.replace('closed', 'open');
    document.getElementById('open-menu-button-text').innerHTML = 'Close Menu';
    document.getElementById('close-menu-button-image').hidden = false;
    document.getElementById('open-menu-button-image').hidden = true;
    // Reset the animation of the hidden img:
    document.getElementById('open-menu-button-image').setAttribute('src', '/shared/menu/Cross-to-Logo-onetime.gif');
}

function closeMenu(menu) {
    console.log("Closing menu");
    menu.classList.replace('open', 'closed');
    document.getElementById('open-menu-button-text').innerHTML = 'Open Menu';
    document.getElementById('open-menu-button-image').hidden = false;
    document.getElementById('close-menu-button-image').hidden = true;
    // Reset the animation of the hidden img:
    document.getElementById('close-menu-button-image').setAttribute('src', '/shared/menu/Logo-to-Cross-onetime.gif');
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
