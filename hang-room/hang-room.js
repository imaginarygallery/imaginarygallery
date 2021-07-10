
window.onload = function() {
    window.scroll({top: document.body.scrollHeight});
    document.getElementById('loading-panel').classList.add('loaded');
}

function scrollToSky(e) {
    e.preventDefault();
    window.scroll({top: 0, behavior: "smooth"});
}
