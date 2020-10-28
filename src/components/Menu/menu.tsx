import React, { FC, createContext, useState, useCallback, useMemo } from 'react';
import classnames from 'classnames';
import MenuItem from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: FC<MenuProps> & { Item: typeof MenuItem } = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;

  const [curActive, setActive] = useState(defaultIndex!);

  const classes = classnames('menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  const handleClick = useCallback(
    (index: number) => {
      setActive(index);
      onSelect?.(index);
    },
    [onSelect]
  );

  const passedContext: IMenuContext = useMemo(
    () => ({
      index: curActive,
      onSelect: handleClick,
    }),
    [curActive, handleClick]
  );

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

Menu.Item = MenuItem;

export default Menu;
