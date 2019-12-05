import React, { useState } from "react";
import bem from "bera";
import Action from "../Action";

const componentClass = bem("NavBar");

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  const [activeAction, setActiveAction] = useState(false);
  // TODO: Add behaviour to active/desactive several actions on NavBar

  return (
    <div className={componentClass()}>
      <Action
        active={activeAction}
        hasMenu={true}
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
