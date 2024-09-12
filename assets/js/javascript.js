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