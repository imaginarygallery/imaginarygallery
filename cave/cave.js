let container = document.querySelector('#overlay');
let RADIUS = 60;

document.addEventListener('mousemove', function (event) {
  let x = event.pageX;
  let y = event.pageY;
  
  let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;

  var getStyle = window.getComputedStyle || function getStyle(element) {
	return element.currentStyle;
  };

  let modals = document.getElementsByClassName('modal')
  let modals_arr = [].slice.call(modals)

  up = modals_arr.some(function(e) {
    return getStyle(e).display === "block"
  });

  if (up !== true) {
	container.style['-webkit-clip-path'] = circle;
	container.style['clip-path'] = circle;
  };

  if (up === true) {
  	let RADIUS = 0;
  	let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
  	container.style['-webkit-clip-path'] = circle;
	container.style['clip-path'] = circle;
  };
});

window.onload = function() {
  let overlayHeight = document.getElementById('overlay').offsetHeight;
  let link = document.querySelector('.ig-room-link.ig-next-room');
  link.style.top = `${overlayHeight - link.offsetHeight}px`;
}
