let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgContainerEl = document.getElementById("bgContainer");
let buttonEl = document.getElementById("button");

bgContainerEl.style.backgroundColor = bgColorsArray[0]

function changeBgColor() {
    let numberOfBg = bgColorsArray.length;
    let randomIndex = Math.ceil(Math.random() * numberOfBg)
    if (randomIndex === numberOfBg) {
        randomIndex = numberOfBg - 1;
    }
    let randomBg = bgColorsArray[randomIndex];
    bgContainerEl.style.backgroundColor = randomBg
}