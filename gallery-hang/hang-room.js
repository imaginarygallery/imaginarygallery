
window.onload = function() {
    window.scroll({top: document.body.scrollHeight});
    document.getElementById('loading-panel').classList.add('loaded');
}

function scrollToSky(e) {
    e.preventDefault();
    window.scroll({top: 0, behavior: "smooth"});
}

function toggleSky(e) {
    e.preventDefault();
    const skyDiv = document.getElementById('hang-room-sky');
    if (skyDiv.classList.contains('background-clouds')) {
        skyDiv.classList.replace('background-clouds', 'background-stars');
    } else if (skyDiv.classList.contains('background-stars')) {
        skyDiv.classList.replace('background-stars', 'background-wash');
    } else {
        skyDiv.classList.replace('background-wash', 'background-clouds');
    }
}