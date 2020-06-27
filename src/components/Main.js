import React from "react";

import Form from "../containers/Form";
import List from "../containers/List";

const Main = ({ list }) => (
  <div>
    <Form />
    <List list={list} />
  </div>
);

export default Main;
