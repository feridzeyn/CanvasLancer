let bar_icon = document.querySelector("#bar_icon");
let close_icon = document.querySelector("#close_icon")
let animation = document.querySelector(".navAnimation");
let img = document.querySelector("#logo")

bar_icon.addEventListener("click", ()=>{
animation.classList.add("active")
document.body.classList.add("mystyle")
})

close_icon.addEventListener("click", ()=>{
animation.classList.remove("active")
document.body.classList.remove("mystyle")
})

// $(document).ready(function(){
//   $('.fifth-name').slick({
//     infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
//   });
// });

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "0": {
        "slidesPerView": 2,
        "slidesPerGroup": 1
    },
    "880": {
        "slidesPerView": 3,
        "slidesPerGroup": 1
    },
    "1025": {
        "slidesPerView": 3,
        "slidesPerGroup": 1
    },
    "1366": {
        "slidesPerView": 4,
        "slidesPerGroup": 1
    }
  }
});