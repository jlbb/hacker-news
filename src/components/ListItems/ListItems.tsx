import React from "react";
import bem from "bera";

const componentClass = bem("listItems");

interface ListItemsProps {
  items: string[];
}

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <ul className={componentClass()}>
      {items.map((item, key) => {
        return <li className={componentClass("item")}>{item}</li>;
      })}
    </ul>
  );
};

export default ListItems;
