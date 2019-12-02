import React from "react";
import bem from "bera";
import { getFormattedDate } from "../../utils";

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
              <div className={componentClass("title")}>{item.title}</div>
              <div className={componentClass("info")}>
                by <span className={componentClass("author")}>{item.by}</span>
                <span>({getFormattedDate(item.time)})</span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
