import { storeState, changeState, mageCreator, classCreator, classFactory } from './../src/js/rpg.js';

describe("Functional RPG", () => {

  test("mageCreator should create an object containing the initial state for a basic mage class", () => {
    const mage = mageCreator("Mage");

    const expectedMage = {
      name: "Mage",
      hp: 100,
      stamina: 30,
      mana: 100,
      strength: 20,
      agility: 40
    };

    expect(mage).toEqual(expectedMage);
  });

  test("classCreator should correctly return an object with attributes defined as given", () => {
    const newClass = classCreator("Fighter")(100)(90)(15)(80)(80);

    const expectedResult = {
      name: "Fighter",
      hp: 100,
      stamina: 90,
      mana: 15,
      strength: 80,
      agility: 80
    };
    
    expect(newClass).toEqual(expectedResult);
  });

  test("classFactory should return the appropriate initial class object given a class name", () => {
    const mage = classFactory("Mage");
    const warrior = classFactory("Warrior");
    const rogue = classFactory("Rogue");
    const empty = classFactory();

    const expectedMage = {
      name: "Mage",
      hp: 100,
      stamina: 30,
      mana: 100,
      strength: 20,
      agility: 40
    };
    const expectedWarrior = {
      name: "Warrior",
      hp: 100,
      stamina: 100,
      mana: 0,
      strength: 100,
      agility: 20
    };
    const expectedRogue = {
      name: "Rogue",
      hp: 100,
      stamina: 100,
      mana: 50,
      strength: 60,
      agility: 100
    };


    expect(mage).toEqual(expectedMage);
    expect(warrior).toEqual(expectedWarrior);
    expect(rogue).toEqual(expectedRogue);
    expect(empty).toEqual({});
  });

  test("storeState should copy and save a given initial state", () => {
    const mage = mageCreator("Mage");
    const mageStateControl = storeState(mage);

    expect(mageStateControl()).toEqual(mage);
  });

  test("changeState should create a state changing function given certain arguments", () => {
    const reduceHealth = changeState("hp")(-10);

    const hasReducedHealth = reduceHealth({});
    const expectedResult = { hp: -10 };

    expect(hasReducedHealth).toEqual(expectedResult);
  });

  test("storeState should correctly save & copy a new state according to a given state change function", () => {
    const reduceHealth = changeState("hp")(-10);
    const mage = mageCreator("Mage");
    const mageStateControl = storeState(mage);

    const hurtMage = mageStateControl(reduceHealth);
    const expectedResult = {
      name: "Mage",
      hp: 90,
      stamina: 30,
      mana: 100,
      strength: 20,
      agility: 40
    };

    expect(hurtMage).toEqual(expectedResult);
  });
});