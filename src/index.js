import * as RPG from './js/rpg.js';

window.onload = function() {

  const mage = RPG.mageCreator("Mage");
  const mageControl = RPG.storeState(mage);

  document.getElementById("feed").onclick = function() {
    const hurtMageState = mageControl(RPG.reduceHealthCrit);
    document.getElementById("soil-value").innerText = `Mage Health: ${hurtMageState.hp}`;
  };
  
  document.getElementById("show-state").onclick = function() {
    const currentState = mageControl();
    document.getElementById("soil-value").innerText = `Mage Health: ${currentState.hp}`;
  };

  document.getElementById("heal-potion").onclick = function() {
    const healMage = mageControl(RPG.addHealthAvg);
    document.getElementById("soil-value").innerText = `Mage Health: ${healMage.hp}`;
  }

};