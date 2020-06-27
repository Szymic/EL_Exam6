// Form.propTypes = {
//   addToDo: PropTypes.func
// }
//
// export default Form;

import React from "react";

const Form = ({ addToDo }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      addToDo(e.target.todoList.value);
    }}
  >
    <input type="text" id="todoList" name="todoList" />
    <button type="submit">Dodaj</button>
  </form>
);

export default Form;
