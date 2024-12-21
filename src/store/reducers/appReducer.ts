import { Reducer } from "redux";

const initialState = {
  exampleState: false,
};

const appReducer: Reducer<typeof initialState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
