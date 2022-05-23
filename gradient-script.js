let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");
let btn = document.querySelector("#randomBtn");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    h3.innerText = body.style.background + ";";
}

function setRandomColor() {
    randomNum1 = Math.floor(Math.random() * 16777215).toString(16);
    randomNum2 = Math.floor(Math.random() * 16777215).toString(16);

    color1.value = "#" + randomNum1;
    color2.value = "#" + randomNum2;
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColor);
