import React, { useRef, Ref, useEffect, useState } from "react";
import { debounce } from "lodash";
import bem from "bera";
import ActionMenu from "../ActionMenu";

const componentClass = bem("Action");

interface ActionProps {
  active?: boolean;
  hasMenu?: boolean;
  title: string;
  onActiveAction: () => void;
}

const defaultActionProps = {
  active: false,
  hasMenu: false
};

const Action = ({
  active = defaultActionProps.active,
  hasMenu = defaultActionProps.hasMenu,
  title,
  onActiveAction
}: ActionProps) => {
  const [menuActive, setMenuActive] = useState(false);
  const _actionRef: Ref<any> = useRef();
  const _toggleMenuRef: Ref<any> = useRef();

  useEffect(() => {
    if (active) {
      _actionRef.current.classList.add("-pressed");
    } else {
      _actionRef.current.classList.remove("-pressed");
    }
  }, [active]);

  useEffect(() => {
    if (hasMenu) {
      if (menuActive) {
        _toggleMenuRef.current.classList.add("-pressed");
      } else {
        _toggleMenuRef.current.classList.remove("-pressed");
      }
    }
  }, [menuActive]);

  const clickAction = debounce(() => {
    onActiveAction();
  }, 500);

  return (
    <div className={componentClass()}>
      <div className={componentClass("mainActionContainer")} ref={_actionRef}>
        <div className={componentClass("mainAction")} onClick={clickAction}>
          {title}
        </div>
        {hasMenu ? (
          <span
            className={componentClass("toggleMenu")}
            ref={_toggleMenuRef}
            onClick={e => setMenuActive(!menuActive)}
          >
            ^
          </span>
        ) : null}
      </div>
      {hasMenu ? (
        <ActionMenu
          active={menuActive}
          fromRef={_actionRef}
          onCloseMenu={() => setMenuActive(false)}
        />
      ) : null}
    </div>
  );
};

export default Action;
