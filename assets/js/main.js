
const gotoup = document.querySelector(".gotoup");

// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

gotoup.addEventListener("click", topFunction)

window.onscroll = function() {onScroll()};


// Get the navbar
let navbar = document.querySelector(".header");
let about = document.querySelector(".about")
// // Get the offset position of the navbar
let sticky = navbar.offsetTop;
let videoOffSet =  about.offsetTop;
console.log(videoOffSet);
// function onScroll() {
//   if (window.pageYOffset >= sticky) {

//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
//   if (window.pageYOffset >= videoOffSet -  140) {
//     navbar.classList.add("dark")
//     gotoup.classList.add("show");
//   }

//   else {
//     navbar.classList.remove("dark");
//     gotoup.classList.remove("show");
//   }
// }
let content = document.querySelector(".content");
let contentOffSet = content.offsetTop;

function onScroll() {
  if (window.pageYOffset >= contentOffSet) {
    navbar.classList.add("dark");
    gotoup.classList.add("show");
  }
  else {
    navbar.classList.remove("dark");
  gotoup.classList.remove("show");

  }
}



const menu = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener( "click", (e) => {
  e.preventDefault();
  menu.classList.toggle("show")

})