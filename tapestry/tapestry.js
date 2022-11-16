function scrollToFront(e) {
    console.log("received");
    e.preventDefault();
    e.stopPropagation;
    var entrance = document.getElementById('ab1_entrance');
    entrance.scrollIntoView({behaviour: "smooth", block: "start"});
}

const scrollContainer = document.querySelector('html');
scrollContainer.addEventListener('wheel', (evt) => {
    scrollContainer.scrollLeft += evt.deltaY;
});

function deselect() {
    document.getElementById('tapestry-overlay').classList.remove('visible');
}

function select(e, frame) {
    e.preventDefault();
    frame.style.zIndex = 2;

    document.getElementById('tapestry-overlay').classList.add('visible');
}

function attachFrameListeners() {
    document.querySelectorAll('.artboard-item').forEach((frame) => {
        frame.addEventListener('click', (e) => {
            select(e, frame);
        });
    });
    document.addEventListener('scroll', deselect);
}
attachFrameListeners();

