let slides = document.querySelectorAll("header .slide")
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let indicator = document.querySelector("#indication span")
let length = document.querySelector("#indication #slidelength")
let index = 0

length.textContent = slides.length

const changeInterval = () => {
    for(let i=0; i<slides.length; i++) {
        slides[i].classList.remove("active")
    }
    if(index > slides.length -1) {
        index = 0
    }
    if(index < 0) {
        index = slides.length -1
    }
    slides[index].classList.add("active")
    indicator.textContent = index + 1
}

setInterval(() => {
    index++
    changeInterval()
}, 10000)

next.addEventListener("click", () => {
    index++
    changeInterval()
})
prev.addEventListener("click", () => {
    index--
    changeInterval()
})