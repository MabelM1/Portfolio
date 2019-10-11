

(function() {
	// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("main-nav");



// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function handleClickLink(event) {

	var section = event.target.dataset.section;		
	document.getElementById(section).scrollIntoView({ behavior: 'smooth'});
}


document.querySelectorAll('#main-nav a').forEach(function (elem) {

  elem.addEventListener('click', handleClickLink);
});


}())

