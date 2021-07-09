import { DonutMaker } from "./DonutMaker.js";

const donutMaker = new DonutMaker();
const addNewAutoClicker = document.querySelector(".add-auto-clicker");
const addNewDonutMultiplier = document.querySelector(".add-donut-multiplier");
const autoClickerCount = document.querySelector(".auto-clicker-count");
const donutPerClick = document.querySelector(".donuts-per-click");
const donutPerSecond = document.querySelector(".donuts-per-second");
const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
const resetGameButton = document.querySelector(".reset-button");

const donutClickerButton = document.querySelector(".add-donut");
function updateDonutCount() {
  console.log(document);
  donutMaker.logClick();
  donutPerClick.innerHTML = "TOTAL PĄCZKI";
  donutPerSecond.innerText = donutMaker.donuts;
  if (donutMaker.donuts >= donutMaker.donutMultiplierCost) {
    addNewDonutMultiplier.style.visibility = "visible";
    if (donutMaker.donuts >= donutMaker.autoClickerCost) {
      addNewAutoClicker.style.visibility = "visible";
    }
  }
}

donutClickerButton.addEventListener("click", updateDonutCount);
addNewDonutMultiplier.addEventListener("click", () => {
  donutMaker.addNewDonutMultiplier();
  donutPerSecond.innerText = donutMaker.donuts;
  donutMultiplierCount.innerText = donutMaker.donutMultiplier;
  if (donutMaker.donuts < donutMaker.donutMultiplierCost) {
    addNewDonutMultiplier.style.visibility = "hidden";
  }
});

donutClickerButton.addEventListener("click", updateDonutCount);

addNewAutoClicker.addEventListener("click", () => {
  donutMaker.addNewAutoClicker();
  donutPerSecond.innerText = donutMaker.donuts;
  autoClickerCount.innerText = donutMaker.autoClicker;
  if (donutMaker.donuts < donutMaker.autoClickerCost) {
    addNewAutoClicker.style.visibility = "hidden";
  }
});

setInterval(() => {
  donutMaker.autoClickersClick();
  donutPerSecond.innerText = donutMaker.donuts;
  if (donutMaker.donuts >= donutMaker.donutMultiplierCost) {
    addNewDonutMultiplier.style.visibility = "visible";
    if (donutMaker.donuts >= donutMaker.autoClickerCost) {
      addNewAutoClicker.style.visibility = "visible";
    }
  }
}, 1000);

resetGameButton.addEventListener("click", function () {
  const resetGameConfirm = confirm(
    "WOAH!! You really want to start from scratch now??!!"
  );
  if (resetGameConfirm) {
    location.reload();
  }
});
