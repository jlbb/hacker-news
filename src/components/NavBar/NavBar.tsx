import React, { useState } from "react";
import bem from "bera";
import Action from "../Action";

const componentClass = bem("NavBar");

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  const [activeAction, setActiveAction] = useState(false);

  return (
    <div className={componentClass()}>
      <Action
        active={activeAction}
        title={"Login"}
        onActiveAction={() => {
          setActiveAction(!activeAction);
        }}
      ></Action>
      <h3 className={componentClass("title")}>
        <span className={componentClass("title__main")}>Hacker</span>{" "}
        <span className={componentClass("title__main")}>N</span>ews
      </h3>
    </div>
  );
};

export default NavBar;
