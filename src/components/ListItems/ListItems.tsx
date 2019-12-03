import React from "react";
import bem from "bera";
import { getFormattedDate, getSourceSite } from "../../config/utils";

const componentClass = bem("ListItems");

interface ListItemsProps {
  items: any[];
}

const ListItems = ({ items }: ListItemsProps) => {
  const renderItemContent = (item: typeof items[0]) => {
    return (
      <a className={componentClass("link")} href={item.url}>
        <div className={componentClass("title")}>{item.title}</div>
        <span className={componentClass("domain")}>
          {getSourceSite(item.url)}
        </span>
        <div className={componentClass("info")}>
          last update by{" "}
          <span className={componentClass("author")}>{item.by}</span> @{" "}
          <span>({getFormattedDate(item.time)})</span>
        </div>
      </a>
    );
  };

  return (
    <ul className={componentClass()}>
      {items.map((item, key) => {
        return (
          <li
            className={componentClass("itemContainer")}
            key={`itemContainer-${key}`}
          >
            {renderItemContent(item)}
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
