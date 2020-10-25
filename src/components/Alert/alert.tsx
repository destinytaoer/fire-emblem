import React, { FC, useState, useCallback } from 'react';
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
  onClose?: () => void; // 关闭时触发的回调
  children?: React.ReactNode;
}

const Alert: FC<AlertProps> = (props) => {
  const { className, type, title, closable, onClose, children } = props;

  const [isClose, setClose] = useState(false);

  const classes = classnames('alert', className, {
    [`alert-${type}`]: type,
  });

  const handleClose = useCallback(() => {
    setClose(true);
    onClose?.();
  }, [onClose]);

  if (isClose) return null;

  return (
    <div className={classes}>
      <span className='alert-title'>{title}</span>
      {children && <div className='alert-desc'>{children}</div>}
      {closable && (
        <span className='alert-close' onClick={handleClose}>
          x
        </span>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: AlertType.DEFAULT,
  closable: true,
};

export default Alert;
