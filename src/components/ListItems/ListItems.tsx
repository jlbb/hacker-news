import React from "react";
import bem from "bera";

const componentClass = bem("listItems");

interface ListItemsProps {
  items: any[];
}

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <ul className={componentClass()}>
      {items.map((item, key) => {
        return (
          <li className={componentClass("itemContainer")}>
            <a className={componentClass("link")} href={item.url}>
              <p className={componentClass("item")}>{item.title}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
