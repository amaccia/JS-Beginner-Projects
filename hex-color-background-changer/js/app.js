"use strict";

const buttonEl = document.getElementById("btn");
const backgroundEl = document.querySelector("body");
const hexColorEl = document.getElementById("hex-value");

const hexColors = function () {
  const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let str = "#";

  for (let i = 0; i < 6; i++) {
    const colorSelector = Math.trunc(Math.random() * hexValues.length);
    str += hexValues[colorSelector];
  }

  hexColorEl.textContent = str;
  backgroundEl.style.backgroundColor = `${str}`;
};

buttonEl.addEventListener("click", hexColors);
