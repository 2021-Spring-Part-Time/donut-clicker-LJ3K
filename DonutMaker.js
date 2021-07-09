class DonutMaker {
  constructor() {
    this.donuts = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    this.donutMultiplier = 0;
    this.donutMultiplierCost = 10;
  }
  logClick() {
    this.donuts += 1 * Math.pow(1.2, this.donutMultiplier);
  }
  addNewAutoClicker() {
    this.donuts -= this.autoClickerCost;
    this.autoClicker++;
    this.autoClickerCost *= 1.1;
    this.autoClickerCost = Math.floor(this.autoClickerCost);
  }

  autoClickersClick() {
    this.donuts += this.autoClicker * Math.pow(1.2, this.donutMultiplier);
  }

  addNewDonutMultiplier() {
    this.donuts -= this.donutMultiplierCost;
    this.donutMultiplier++;
    this.donutMultiplierCost *= 1.1;
    this.donutMultiplierCost = Math.floor(this.donutMultiplierCost);
  }

  resetGame() {
    this.donuts = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    this.donutMultiplier = 0;
    this.donutMultiplierCost = 10;
  }
}
export { DonutMaker };
