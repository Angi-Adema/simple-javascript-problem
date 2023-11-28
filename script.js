const color1 = document.getElementById("1")
const color2 = document.getElementById("2")
const color3 = document.getElementById("3")
const color4 = document.getElementById("4")
const color5 = document.getElementById("5")
const color6 = document.getElementById("6")

let buttonIds = []

const changeColor = function () {
  this.style.backgroundColor = "green"
  buttonIds.push(this.id)
}

color1.addEventListener("click", changeColor)
color2.addEventListener("click", changeColor)
color3.addEventListener("click", changeColor)
color4.addEventListener("click", changeColor)
color5.addEventListener("click", changeColor)

const reverseColor = function () {
  buttonIds.reverse().forEach((id) => {
    let button = document.getElementById(id)
    button.style.backgroundColor = "white"
  })
}

color6.addEventListener("click", reverseColor)
