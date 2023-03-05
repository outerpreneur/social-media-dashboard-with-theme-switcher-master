const switchSlider = document.querySelector(".switch");
const bodyTag = document.querySelector("body");
const headingFive = document.querySelector("h5");
const headingTwo = document.querySelectorAll("h2");
const darkMode = document.querySelector(".mode-switch span");
const blocks = document.querySelectorAll(".block");

let bit = true;

switchSlider.addEventListener("change", () => {
  if (bit === false) {
    bit = true;
    bodyTag.style.backgroundColor = "var(--White-BG";
    bodyTag.style.color = "var(--Very-Dark-Blue-Text)";
    darkMode.style.color = "var(--Very-Dark-Blue-Text)";
    headingFive.style.color = "var(--Very-Dark-Blue-Text)";
    headingTwo.forEach((heading) => {
      heading.style.color = "var(--Very-Dark-Blue-Text)";
    });
    blocks.forEach((block) => {
      block.style.backgroundColor = "var(--Light-Grayish-Blue-Card-BG)";
    });
  } else {
    bit = false;
    bodyTag.style.backgroundColor = "var(--Very-Dark-Blue-Top-BG-Pattern)";
    bodyTag.style.color = "var(--White-Text)";
    darkMode.style.color = "var(--White-Text)";
    headingFive.style.color = "var(--Desaturated-Blue-text)";
    headingTwo.forEach((heading) => {
      heading.style.color = "var(--White-Text)";
    });
    blocks.forEach((block) => {
      block.style.backgroundColor = "var(--Dark-Desaturated-blue-Card-BG)";
    });
  }
});
