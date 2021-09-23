import React from 'react';
import './Button.css';

const STYLES = ['btn2--primary', 'btn2--outline'];

const SIZES = ['btn2--medium', 'btn2--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn2 ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
