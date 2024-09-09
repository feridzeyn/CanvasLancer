let icon = document.querySelector("#bar_icon");
let animation = document.querySelector(".navAnimation");
let img = document.querySelector("#logo")
icon.addEventListener("click", ()=>{
animation.classList.toggle("active")
document.querySelector(".first-body").classList.toggle("mystyle")
img.classList.toggle("mystyle1")
})