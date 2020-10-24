var loadTime; // Defining the loading time variable
var showContentVar;
var percent = 0;
var navbarOpen = false;

function loadPage() {
  setInterval(increasePercent, 30);
  loadTime = setTimeout(showPage, 4000); // After 3.5 seconds, load the page
}
function increasePercent() {
  if(percent <= 100) {
    document.getElementById("percent").innerHTML = percent + "%";
    percent += 1;
  }
}
function showPage() {
  var titletext = document.getElementById("titletext");
  document.getElementById("loader").style.display = "none"; // Remove the loading spinner
  document.getElementsByClassName("topnav")[0].style.animationName = "titlebar";
  titletext.style.animationName = "title";
  titletext.style.animationTimingFunction = "linear";
  titletext.style.animationDuration = "2.5s";
  titletext.style.animationFillMode = "forwards";
  document.getElementById("main").style.display = "block";
  setTimeout(function() {
    var x = document.getElementById("topnav").getElementsByTagName("a");
    for (let index = 0; index < x.length; index++) {
      x[index].style.opacity = 1;
    }
    document.getElementById("menuButton").style.opacity = 1;
  }, 2500);
}
function toggleNav() {
  navbarOpen ? closeNav() : openNav();
}
function openNav() {
  var titletext = document.getElementById("titletext");
  titletext.style.visibility = "hidden";
  /* document.body.style.position = "fixed"; */
  /* document.body.style.top = "-${window.scrollY}px"; */
  document.getElementById("menuButton").getElementsByTagName("i")[0].classList.toggle("fa-bars");
  document.getElementById("menuButton").getElementsByTagName("i")[0].classList.toggle("fa-close");
  document.getElementById("navMenu").style.width = "100%";
  navbarOpen = true;
}

function closeNav() {
  var titletext = document.getElementById("titletext");
  titletext.style.visibility = "visible";
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.getElementById("navMenu").style.width = "0%";
  document.getElementById("menuButton").getElementsByTagName("i")[0].classList.toggle("fa-bars");
  document.getElementById("menuButton").getElementsByTagName("i")[0].classList.toggle("fa-close");
  navbarOpen = false;
}
// Slideshow stuff
var slideIndex = [1,2,3,4,5,6,7]; //An array whose length is based on how many slideshows there are (doesn't matter what the numbers are)
var contentIndex = [1,2,3];
var slideId = ["slides1", "slides2", "slides3", "slides4", "slides5", "slides6", "slides7"]; // An array containing the classes of each slideshow
var contentId = ["content"]
// These lines show the slides of each slideshow, with the second number being the slideshow index (i.e. 0 = "slides1", 1 = "slides2", etc.) and the first number being the first slide of each slideshow
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
loadContent(1, 0);
// The function that shows the next or previous slide
function plusSlides(whichSlide, whichSlideShow) {
  showSlides(slideIndex[whichSlideShow] += whichSlide, whichSlideShow);
}
// The function that loads the slideshows
function showSlides(whichSlide, whichSlideShow) {
  var i;
  var x = document.getElementsByClassName(slideId[whichSlideShow]); // Gets the slideshow
  if (whichSlide > x.length) {slideIndex[whichSlideShow] = 1} // If the current slide is past the number of images in the slideshow, bring it back to the beginning
  if (whichSlide < 1) {slideIndex[whichSlideShow] = x.length} // if the current slide is below the number of images in the slideshow, bring it to the beginning
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // Hide the image by default
  }
  // x[slideIndex[whichSlideShow]-1].style.display = "block";
}

// The function that shows the next or previous page
function nextPage(content, contentNum) {
  loadContent(contentIndex[contentNum] += content, contentNum);
}

// The function that loads the pages
function loadContent(content, contentNum) {
  var i;
  var x = document.getElementsByClassName(contentId[contentNum]); // Gets the slideshow
  if (content > x.length) {contentIndex[contentNum] = 1} // If the current slide is past the number of images in the slideshow, bring it back to the beginning
  if (content < 1) {contentIndex[contentNum] = x.length} // if the current slide is below the number of images in the slideshow, bring it to the beginning
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // Hide the image by default
  }
  x[contentIndex[contentNum]-1].style.display = "block";
}

