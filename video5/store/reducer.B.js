const initialState = {
  b: 1,
};

const reducerB = (state = initialState, action) => {
  if (action.type === "UPDATE_B") {
    return {
      ...state,
      a: state.a + action.b,
    };
  }

  return newState;
};

export default reducerb;
