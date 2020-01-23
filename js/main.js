(function() {
	// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
const navbarList = document.querySelector(".navigation__list");
const navbar = document.querySelector(".navigation");
const year= document.querySelector(".year");

year.innerText = new Date().getFullYear();

// Get the offset position of the navbar
const sticky = navbarList.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const myFunction = () => {
  if (window.pageYOffset > sticky) {
    navbarList.classList.add("sticky")
  } else {
    navbarList.classList.remove("sticky");
  }
}

const handleClickLink = (event) => {
  var section = event.target.dataset.section;   
  document.getElementById(section).scrollIntoView({ behavior: 'smooth'});
}

document.querySelectorAll('.navigation__link').forEach( elem => {
  elem.addEventListener('click', handleClickLink);
});


}())