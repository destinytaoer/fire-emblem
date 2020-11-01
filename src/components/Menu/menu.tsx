import React, { FC, createContext, useState, useCallback, useMemo } from 'react';
import classnames from 'classnames';
import MenuItem, { MenuItemProps } from './menuItem';

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

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;

      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid='menu'>
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

Menu.Item = MenuItem;

export default Menu;
