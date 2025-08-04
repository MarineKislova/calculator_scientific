document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const display = document.querySelector(".calculator__display-area");

  function autoResize(el) {
    el.style.height = "auto"; // сбросить текущую высоту
    el.style.height = el.scrollHeight + "px"; // установить нужную
  }

  display.addEventListener("input", () => autoResize(display));

  const basicCalc = document.querySelector("#basic-tab");
  const scientificCalc = document.querySelector("#scientific-tab");
  const basicBtns = document.querySelector(".basic-buttons");
  const scientificBtns = document.querySelector(".scientific-buttons");

  basicCalc.addEventListener("click", () => {
    basicBtns.classList.add("active-tab");
    scientificBtns.classList.remove("active-tab");
    scientificBtns.classList.add("hidden-tab");
    document
      .querySelectorAll(".tab")
      .forEach((tab) => tab.classList.toggle("active"));
    // basicBtns.style.display = "grid";
    // scientificBtns.style.display = "none";
  });
  scientificCalc.addEventListener("click", () => {
    scientificBtns.classList.add("active-tab");
    basicBtns.classList.remove("active-tab");
    basicBtns.classList.add("hidden-tab");
    document
      .querySelectorAll(".tab")
      .forEach((tab) => tab.classList.toggle("active"));
    // basicBtns.style.display = "none";
    // scientificBtns.style.display = "grid";
  });

  // изменение в ползунке DEG/RAD
  const toggle = document.getElementById("degRadToggle");
  const slider = document.querySelector(".slider");
  const displayDegRad = document.getElementById("display-area");
  console.log(displayDegRad);

  toggle.addEventListener("change", () => {
    const isDeg = !toggle.checked; // checked = RAD
    slider.setAttribute("data-mode", isDeg ? "DEG" : "RAD");
  });

  // вывод результата переключения DEG/RAD на экран
  toggle.addEventListener("change", () => {
    const isDeg = toggle.checked;
    displayDegRad.value = `Mode: ${isDeg ? "RAD" : "DEG"}`;
    console.log(toggle.checked);
  });
});
