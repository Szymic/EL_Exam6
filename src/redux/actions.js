export const ADD_TODO = "ADD_TODO";
export const TODO_TOGGLED = "TODO_TOGGLED";
export const TODO_REMOVED = "TODO_REMOVED";

export const add = (title) => {
  return {
    type: ADD_TODO,
    payload: title,
  };
};

export const toggle = (title) => {
  return {
    type: TODO_TOGGLED,
    payload: title,
  };
};

export const remove = (title) => {
  return {
    type: TODO_REMOVED,
    payload: title,
  };
};

export const aRemove = (title) => (dispatch) => {
  setTimeout(() => {
    dispatch(remove(title));
  }, 2000);
};
