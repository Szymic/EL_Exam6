import { combineReducers } from "redux";

import { ADD_TODO, TODO_TOGGLED } from "./actions";

const todos = (state = [], { type, payload }) => {
  if (type === ADD_TODO) {
    return [...state, payload];
  }
  if (type === TODO_TOGGLED) {
    return [...state];
  }
  return state;
};

export default combineReducers({
  todos,
});
