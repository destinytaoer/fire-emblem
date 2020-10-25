import React, { FC } from 'react';
import classnames from "classnames";

export enum ButtonSize {
  LARGE = 'lg',
  SMALL = 'sm',
}

export enum ButtonType {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  DANGER = 'danger',
  LINK = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  // btn, btn-lg, btn-primary
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': btnType === ButtonType.LINK && disabled
  });

  if (btnType === ButtonType.LINK && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.DEFAULT,
}
export default Button;