// List.propTypes = {
//   items: PropTypes.array,
//   toggle: PropTypes.func, // zad 4
//   remove: ProTypes.func, // zad 5
//   asyncRemove: PropTypes.func //zad7
// }
//
// export default List;

import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li>
            {product.name} - {product.price} PLN
          </li>
        );
      })}
    </ul>
  );
}
