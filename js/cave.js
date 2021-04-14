let container = document.querySelector('#overlay');
const RADIUS = 80;

document.addEventListener('mousemove', function (event) {
  let x = event.pageX;
  let y = event.pageY;
  
  let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
  container.style['-webkit-clip-path'] = circle;
  container.style['clip-path'] = circle;
});


// document.body.onmousemove = function(e) {
//   document.documentElement.style.setProperty('--x',(e.clientX)+'px');
//   document.documentElement.style.setProperty('--y',(e.clientY)+'px');
// }