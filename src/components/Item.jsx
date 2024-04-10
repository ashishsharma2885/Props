import React from 'react';
import style from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${style.Ashish} list-group-item`}>
      <span className={style["Ashish-span"]}>{foodItem}</span>
    </li>
  );
}

export default Item;
