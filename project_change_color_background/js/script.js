"use strict";

const buttonEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

const changeColor = function () {
  const colors = ["blue", "red", "green", "purple", "pink", "yellow"];
  const colorSelector = Math.trunc(Math.random() * colors.length);
  bodyEl.style.backgroundColor = `${colors[colorSelector]}`;
};

buttonEl.addEventListener("click", changeColor);
// const colors = ["blue", "red", "green", "purple", "pink", "yellow"];
// const colorSelector = Math.trunc(Math.random() * colors.length);
// bodyEl.style.backgroundColor = `${colors[colorSelector]}`;
