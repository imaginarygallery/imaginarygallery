// Desired distance between moving artworks and the outside of the window:
const windowPadding = 100;

window.onload = function() {
    window.scroll({top: document.body.scrollHeight, behavior: 'auto'});
    document.getElementById('loading-panel').classList.add('loaded');
}

function scrollToSky(e) {
    e.preventDefault();
    e.stopPropagation();
    window.scroll({top: 0, behavior: "smooth"});
}

function scrollToFloor(e) {
    e.preventDefault();
    e.stopPropagation();
    window.scroll({top: document.body.scrollHeight, behavior: "smooth"});
}

function toggleSky(e) {
    e.preventDefault();
    if (isAnyArtworkSelected()) return;
    const skyDiv = document.getElementById('hang-room-sky');
    const skyOverlayDiv = document.getElementById('hang-room-sky-overlay');

    if (skyDiv.classList.contains('background-clouds')) {
        skyDiv.classList.replace('background-clouds', 'background-stars');
        skyOverlayDiv.classList.replace('background-clouds', 'background-stars');
    } else if (skyDiv.classList.contains('background-stars')) {
        skyDiv.classList.replace('background-stars', 'background-wash');
        skyOverlayDiv.classList.replace('background-stars', 'background-wash');
    } else {
        skyDiv.classList.replace('background-wash', 'background-clouds');
        skyOverlayDiv.classList.replace('background-wash', 'background-clouds');
    }
}

function onArtworkClicked(e) {
    e.stopPropagation();

    let frameDiv = e.currentTarget;
    if (frameDiv.classList.contains('focussed')) {
        defocusArtwork(frameDiv);
        return;
    }

    if (!isAnyArtworkSelected()) {
        focusArtwork(frameDiv);
    }
}

function isAnyArtworkSelected() {
    return !!document.querySelector('.artwork-hang.focussed');
}

function focusArtwork(frameDiv) {
    let x = parseInt(frameDiv.style.left);
    let y = parseInt(frameDiv.style.top);
    const destinationX = windowPadding;
    const destinationY = windowPadding;
    frameDiv.style.transform = `translate(${destinationX - x}px, ${destinationY - y}px)`;
    frameDiv.style.zIndex = 2;
    frameDiv.style.maxWidth = `calc(100vw - ${windowPadding * 2}px)`;

    document.getElementById('hang-room-sky-overlay').classList.add('visible');
    frameDiv.classList.add('focussed');

}

function removeZIndexOverride(e) {
    let frameDiv = e.currentTarget;
    frameDiv.style.zIndex = null;
    frameDiv.style.maxWidth = null;
    frameDiv.removeEventListener('transitionend', removeZIndexOverride);
}

function defocusArtwork(frameDiv) {
    frameDiv.style.transform = '';
    frameDiv.classList.remove('focussed');
    document.getElementById('hang-room-sky-overlay').classList.remove('visible');
    frameDiv.addEventListener('transitionend', removeZIndexOverride);
}
