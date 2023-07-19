import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  // Define your initial state here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your reducer cases here
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;