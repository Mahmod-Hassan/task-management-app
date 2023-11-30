import React from "react";

const Button = ({ children, bgColor, ...props }) => {
  return (
    <button className={`text-white rounded-md px-3 py-1 ${bgColor}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
