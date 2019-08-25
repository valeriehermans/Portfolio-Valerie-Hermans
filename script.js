//dark en light functie
let darkLink = document.querySelectorAll("nav a")[0];
let lightLink = document.querySelectorAll("nav a")[1];
let mijnBody = document.querySelector("body");
function switchToLight() {
	mijnBody.classList.add("light");
}
function switchToDark() {
	mijnBody.classList.remove("light");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

//Menu menu
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";}
    else {
		navMenu.style.display = "flex";
    console.log("klik werkt")}
}

menuKnop.addEventListener("click",toonMenu);
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
  console.log("klik 2 werkt")
}
mainGedeelte.addEventListener("click",verbergMenu);

//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
