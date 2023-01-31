const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
// const navItem = document.querySelector(".navItem");
const svg = document.querySelector("svg")

hamburger.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navItem").forEach(n => n.addEventListener("click", () =>{
    navMenu.classList.remove("active");
}))


