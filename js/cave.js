// Get the modal
var OneModal = document.getElementById("OneModal");

// Get the button that opens the modal
var btnOne = document.getElementById("buttonOne");

var closeOne = document.getElementById("closeOne")


// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  OneModal.style.display = "block";
}




// Get the modal
var TwoModal = document.getElementById("TwoModal");

// Get the button that opens the modal
var btnTwo = document.getElementById("buttonTwo");

var closeTwo = document.getElementById("closeTwo")


// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  TwoModal.style.display = "block";
}



// Get the modal
var ThreeModal = document.getElementById("ThreeModal");

// Get the button that opens the modal
var btnThree = document.getElementById("buttonThree");

var closeThree = document.getElementById("closeThree")

// When the user clicks on the button, open the modal
btnThree.onclick = function() {
  ThreeModal.style.display = "block";
}




// Get the modal
var FourModal = document.getElementById("FourModal");

// Get the button that opens the modal
var btnFour = document.getElementById("buttonFour");

var closeFour = document.getElementById("closeFour")


// When the user clicks on the button, open the modal
btnFour.onclick = function() {
  FourModal.style.display = "block";
}



// Get the modal
var FiveModal = document.getElementById("FiveModal");

// Get the button that opens the modal
var btnFive = document.getElementById("buttonFive");

var closeFive = document.getElementById("closeFive")

// When the user clicks on the button, open the modal
btnFive.onclick = function() {
  FiveModal.style.display = "block";
}




// // Get the modal
// var OneModal = document.getElementById("OneModal");

// // Get the button that opens the modal
// var btnOne = document.getElementById("buttonOne");

// // Get the <span> element that closes the modal
// var closeOne = document.getElementsByClassName("closeOne")[0];

// // When the user clicks on the button, open the modal
// btnOne.onclick = function() {
//   OneModal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// closeOne.onclick = function() {
//   OneModal.style.display = "none";
// }

// var open_modal = document.getElementsByClassName("modal")[0]


// Get the <span> element that closes the modal

// var close = document.getElementsByClassName("close")[0];



// function isVisible(element) {
// 		return (element.offsetParent !== null)
// };
// var close_list = Array.prototype.filter.call(document.getElementsByClassName("close"), function(element) {
// 	    return isVisible(element) === true;
// });
// var close = close_list[0];


// if (typeof close !== "undefined") {
// 	close.onclick = function() {
// 		var getStyle = window.getComputedStyle || function getStyle(element) {
// 		    return element.currentStyle;
// 		};

// 		var open_modal_list = Array.prototype.filter.call(document.getElementsByClassName("modal"), function(element) {
// 		    return getStyle(element).display === "block";
// 		});

// 		var open_modal = open_modal_list[0];
// 	  	open_modal.style.display = "none";
// 	  	open_modal = null
// 	};
// }

// When the user clicks on <span> (x), close the modal
// close.onclick = function() {
// 	var getStyle = window.getComputedStyle || function getStyle(element) {
// 	    return element.currentStyle;
// 	};

// 	var open_modal_list = Array.prototype.filter.call(document.getElementsByClassName("modal"), function(element) {
// 	    return getStyle(element).display === "block";
// 	});

// 	var open_modal = open_modal_list[0];
//   	open_modal.style.display = "none";
//   	open_modal = null
// };

closeOne.onclick = function(event) {
	OneModal.style.display = "none";
}
closeTwo.onclick = function(event) {
	TwoModal.style.display = "none";
}
closeThree.onclick = function(event) {
	ThreeModal.style.display = "none";
}
closeFour.onclick = function(event) {
	FourModal.style.display = "none";
}
closeFive.onclick = function(event) {
	FiveModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == OneModal) {
    OneModal.style.display = "none";
  }
  if (event.target == TwoModal) {
    TwoModal.style.display = "none";
  }
  if (event.target == ThreeModal) {
    ThreeModal.style.display = "none";
  }
  if (event.target == FourModal) {
    FourModal.style.display = "none";
  }
  if (event.target == FiveModal) {
    FiveModal.style.display = "none";
  }
}



let container = document.querySelector('#overlay');
const RADIUS = 60;

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
});




