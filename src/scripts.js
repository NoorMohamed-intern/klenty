"use strict";

import * as bootstrap from "bootstrap";

console.log("hi");

//slider Implentation

const Slides = document.querySelectorAll(".slide");
const btnLeftSlide = document.querySelector(".slider__btn--left");
const btnRightSlide = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = Slides.length;

const goToSlide = function (slide) {
  Slides.forEach(
    (ele, ind) => (ele.style.transform = `translateX(${100 * (ind - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const PreviousSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRightSlide.addEventListener("click", nextSlide);
btnLeftSlide.addEventListener("click", PreviousSlide);
