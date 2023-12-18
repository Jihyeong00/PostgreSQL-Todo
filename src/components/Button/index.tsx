import React, { CSSProperties, PropsWithChildren } from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'primary-text';
  shape: 'round' | 'default';
  size: 'small' | 'medium' | 'large' | 'full';
  containerStyle?: CSSProperties;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  variant,
  shape = 'default',
  size,
  containerStyle,
  children,
  ...rest // onclick, style, ....
}) => {
  return (
    <div style={containerStyle}>
      <button>{children}</button>
    </div>
  );
};

export default Button;
