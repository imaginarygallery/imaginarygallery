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
