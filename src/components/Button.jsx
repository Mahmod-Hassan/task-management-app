import React from "react";

const Button = ({ children, classes, type, ...args }) => {
  return (
    <button
      className={`text-white rounded-md px-3 py-1 ${classes}`}
      {...args}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
