// For storing state and state control:
export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
};

// Initial state creators for different classes
export const mageCreator = function(name) {
  return {
    name,
    hp: 100,
    stamina: 30,
    mana: 100,
    strength: 20,
    agility: 40
  }
}

// export const warriorCreator = function(name) {
//   return {
//     name,
//     hp: 100,
//     stamina: 100,
//     mana: 0,
//     strength: 100,
//     agility: 20
//   }
// }

// export const rogueCreator = function(name) {
//   return {
//     name,
//     hp: 100,
//     stamina: 100,
//     mana: 50,
//     strength: 60,
//     agility: 100
//   }
// }

// Function factory for creating a class:
export const classCreator = (className) => 
  ((health) => ((stm) => ((magic) => ((str) => ((agi) => 
          ({
            name: className,
            hp: health,
            stamina: stm,
            mana: magic,
            strength: str,
            agility: agi
          })
        )
      )
    )
  )
);

// Our function factory for changing state properties:
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// changeStateFunctions for reducing or increasing a character's attribute:
export const reduceHealthAvg = changeState("hp")(-10);
export const reduceHealthCrit = changeState("hp")(-30);
export const addHealthAvg = changeState("hp")(10);
export const addHealthCrit = changeState("hp")(30);

export const reduceManaAvg = changeState("mana")(-10);
export const reduceManaBig = changeState("mana")(-25);
export const addManaAvg = changeState("mana")(15);
export const addManaBig = changeState("mana")(30);

export const reduceStaminaAvg = changeState("stamina")(-10);
export const reduceStaminaBig = changeState("stamina")(-20);
export const addStamina = changeState("stamina")(25);