import React, { useRef, Ref, useEffect } from "react";
import { debounce } from "lodash";
import bem from "bera";

const componentClass = bem("Action");

interface ActionProps {
  active?: boolean;
  title: string;
  onActiveAction: () => void;
}

const defaultActionProps = {
  active: false
};

const Action = ({
  active = defaultActionProps.active,
  title,
  onActiveAction
}: ActionProps) => {
  const _refAction: Ref<any> = useRef();

  useEffect(() => {
    setActionPressed(active);
  }, [active]);

  const clickAction = debounce(() => onActiveAction(), 500);

  const setActionPressed = (pressed: boolean) => {
    if (pressed) {
      _refAction.current.classList.add(componentClass("pressed"));
    } else {
      _refAction.current.classList.remove(componentClass("pressed"));
    }
  };

  return (
    <div
      className={componentClass()}
      onClick={clickAction}
      onMouseDown={() => setActionPressed(true)}
      onMouseUp={() => setActionPressed(false)}
      ref={_refAction}
    >
      {title}
    </div>
  );
};

export default Action;
