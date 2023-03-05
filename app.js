const switchSlider = document.querySelector(".slider");
const bodyTag = document.querySelector("body");

let bit = true;

switchSlider.addEventListener("click", () => {
  if (switchSlider.checked) {
    console.log("it works");
    bodyTag.style.backgroundColor = "white";
  } else {
    console.log("2");
    bodyTag.style.backgroundColor = "black";
  }
});
