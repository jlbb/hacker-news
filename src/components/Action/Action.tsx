import React from "react";
import bem from "bera";

const componentClass = bem("Action");

interface ActionProps {
  title: string;
}

const Action = ({ title }: ActionProps) => {
  const clickAction = () => {
    alert("Action clicked");
  };

  return (
    <div className={componentClass()} onClick={clickAction}>
      {title}
    </div>
  );
};

export default Action;
