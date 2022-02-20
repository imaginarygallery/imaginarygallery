function scrollToFront(e) {
    console.log("received");
    e.preventDefault();
    e.stopPropagation;
    var entrance = document.getElementById('ab1_entrance');
    entrance.scrollIntoView({behaviour: "smooth", block: "start"});
}

const scrollContainer = document.getElementById('wrapper');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});