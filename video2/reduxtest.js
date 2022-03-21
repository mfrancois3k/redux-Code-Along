const { createStore } = require("redux");

const initialState = {
  age: 21,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.val;
  }
  if (action.type === "SUBTRACT") {
    newState.age -= action.val;
  }
  return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
  console.log("State Changed " + JSON.stringify(store.getState()));
});

store.dispatch({ type: "ADD", val: 10 });

store.dispatch({ type: "SUBTRACT", val: 5 });

console.log(store.getState());

// // optize the code

// const reduce = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       return add(state, action);
//     case "SUBTRACT":
//       return substract(state, action);
//     default:
//       return state;
//   }
// };

// const add = (state, action) => {
//   return { ...state, age: (state.age += action.val) };
// };

// const substract = (state, action) => {
//   return { ...state, age: (state.age -= action.val) };
// };

// const store = createStore(reduce);
// store.subscribe(() => {
//   console.log("State Changed " + JSON.stringify(store.getState()));
// });

// store.dispatch({ type: "ADD", val: 10 });
// store.dispatch({ type: "SUBTRACT", val: 5 });
// console.log(store.getState());
