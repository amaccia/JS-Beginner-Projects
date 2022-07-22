"use strict";

// My solution
let counterEl = document.getElementById("counter");
const prevEl = document.querySelector(".prevBtn");
const addEl = document.querySelector(".nextBtn");

let counter = 0;

prevEl.addEventListener("click", function () {
  if (counter <= 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "";
  }
  counterEl.innerText = --counter;
});

addEl.addEventListener("click", function () {
  if (counter >= 0) {
    counterEl.style.color = "green";
  } else {
    counterEl.style.color = "";
  }
  counterEl.innerText = ++counter;
});

/*
// DRY approach - solution referenced 

const btn = document.querySelectorAll(".counterBtn");
let counter = 0;

btn.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("prevBtn")) {
      counter--;
    } else if (button.classList.contains("nextBtn")) {
      counter++;
    }

    const counterEL = document.getElementById("counter");
    counterEL.innerText = counter;

    if (counter < 0) {
      counterEL.style.color = "red";
    } else if (counter > 0) {
      counterEL.style.color = "green";
    } else {
      counterEL.style.color = "";
    }
  });
});
*/
