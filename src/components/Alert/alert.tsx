import React, { FC } from 'react';
import classnames from 'classnames';

export enum AlertType {
  SUCCESS = 'success',
  DEFAULT = 'default',
  DANGER = 'danger',
  WARNING = 'warning',
}

interface AlertProps {
  type?: AlertType;
  className?: string;
  title: string;
  closable?: boolean;
  children?: React.ReactNode;
}

const Alert: FC<AlertProps> = (props) => {
  const { className, type, title, closable, children } = props;

  const classes = classnames('alert', className, {
    [`alert-${type}`]: type,
  });

  return (
    <div className={classes}>
      <span className='alert-title'>{title}</span>
      {children && <div className='alert-desc'>{children}</div>}
      {closable && <span className='alert-close'>x</span>}
    </div>
  );
};

Alert.defaultProps = {
  type: AlertType.DEFAULT,
  closable: true,
};

export default Alert;
