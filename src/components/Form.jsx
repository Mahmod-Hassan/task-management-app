import React from "react";

const Form = ({ children, ...props }) => {
  return (
    <form
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
