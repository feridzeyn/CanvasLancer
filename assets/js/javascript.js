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
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});