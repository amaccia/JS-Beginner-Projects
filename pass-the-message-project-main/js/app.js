"use strict";

const btnEl = document.getElementById("submitBtn");

btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("message").value;
  const feedback = document.querySelector(".feedback");

  if (input === "") {
    feedback.classList.add("show");
    setTimeout(function () {
      feedback.classList.remove("show");
    }, 2000);
  } else {
    document.querySelector(".message-content").innerHTML = input;
    document.getElementById("message").value = "";
  }
});
