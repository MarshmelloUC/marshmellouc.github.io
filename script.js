/* ------------------------------------[ Navbar Button Toggle ]---------------------------------------- */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('main-nav')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

/* ------------------------------------[ Testmonials Section ]---------------------------------------- */


const testimonialPage = document.querySelector(".quotes-slide[data-slider-slide-index='1']");
testimonialPage.classList.add("quotes-slide--active");


document.querySelector(".quotes").addEventListener("mouseout", function () {
  document.querySelector(".quotes-slide--active").classList.remove("quotes-slide--active")
  document.querySelector(".quotes-slide[data-slider-slide-index='1']").classList.add("quotes-slide--active")
});


document.querySelectorAll(".quotes-slide").forEach(
  elem => elem.addEventListener("mouseover", function () {
    document.querySelector(".quotes-slide--active").classList.remove("quotes-slide--active")
    this.classList.add("quotes-slide--active")
  })
)


// ------------------------------------------- [ Preloader ] ----------------------------------------- \\

// var loader = document.getElementsByClassName('preloader-background')[0]
// var body = document.querySelector("body")
// window.addEventListener("load", function () {
//   loader.style.display = 'none';
//   body.style.overflow = "visible"
// })