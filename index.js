const navElemenets = document.getElementById("nav-elements")
const hamburgerMenu = document.getElementById("hamburger-menu")

const hamburgerBar = document.getElementById("hamburger-bar")

const roodColor = document.querySelector("#nav-elements .rood")

const oranjeColor = document.querySelector("#nav-elements .oranje")

const geelColor = document.querySelector("#nav-elements .geel")

const groenColor = document.querySelector("#nav-elements .groen")

const indigoColor = document.querySelector("#nav-elements .indigo")

const violetColor = document.querySelector("#nav-elements .violet")

const container = document.getElementById("container")

const textColor = document.getElementById("text-color")

const changeColor = function (color) {
    container.classList.remove("rood")
    container.classList.remove("oranje")
    container.classList.remove("geel")
    container.classList.remove("groen")
    container.classList.remove("indigo")
    container.classList.remove("violet")
    container.classList.add(color);
    hamburgerBar.classList.remove("select")
    navElemenets.classList.add("hide")
    document.getElementById(color).checked = true;
    textColor.textContent = color
}

const addSelect = function () {
    hamburgerBar.classList.toggle("select")
    navElemenets.classList.toggle("hide")
}

hamburgerMenu.addEventListener("click", addSelect)

const mouseEnterAdd = function (e){
    hamburgerBar.classList.add("select")
    navElemenets.classList.remove("hide")
}

hamburgerMenu.addEventListener("mouseenter", mouseEnterAdd)


// /*  Wanneer ik als gebruiker met mijn muis weer weg ga bij de hamburger verdwijnt het menu weer.  Dit gedeelte wil niet lukken ivm dat er te snel geschakeld word tussen mouseenter en mouseout */

// hamburgerMenu.addEventListener("mouseleave", function () {
//     hamburgerBar.classList.remove("select")
//     navElemenets.classList.add("hide")
// })

roodColor.addEventListener("click", () => changeColor("rood"))

oranjeColor.addEventListener("click", () => changeColor("oranje"))

geelColor.addEventListener("click", () => changeColor("geel"))

groenColor.addEventListener("click", () => changeColor("groen"))

indigoColor.addEventListener("click", () => changeColor("indigo"))

violetColor.addEventListener("click", () => changeColor("violet"))




document.addEventListener('keydown', ()=> {
    if (event.key == 1) {
        changeColor("rood")
    } else if (event.key == 2) {
        changeColor("oranje")
    } else if (event.key == 3) {
        changeColor("geel")
    } else if (event.key == 4) {
        changeColor("groen")
    } else if (event.key == 5) {
        changeColor("indigo")
    } else if (event.key == 6) {
        changeColor("violet")}
})


