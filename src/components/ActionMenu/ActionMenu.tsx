import React, { Ref, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import bem from "bera";
import LoginForm from "../LoginForm";

const componentClass = bem("ActionMenu");

interface ActionMenuProps {
  active?: boolean;
  fromRef?: Ref<any> | any;
  onCloseMenu: () => any;
}

const defaultActionMenuProps = {
  active: false
};

const ActionMenu = ({
  active = defaultActionMenuProps.active,
  fromRef,
  onCloseMenu
}: ActionMenuProps) => {
  const _menuRef: Ref<any> = useRef();

  useEffect(() => {
    if (fromRef) {
      _menuRef.current.style.top = `${fromRef.current.offsetHeight}px`;
    }
  }, [fromRef]);

  return (
    <div className={componentClass()} ref={_menuRef}>
      {active ? (
        <React.Fragment>
          <LoginForm />
          <span className={componentClass("closeIcon")} onClick={onCloseMenu} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default ActionMenu;
