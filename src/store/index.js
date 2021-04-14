import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

// every slice needs:
// name, initialState, reducers
// redux toolkit makes it SEEM like we're manipulating the state
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

// #region reducer without toolkit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
//#endregion

export default store;
