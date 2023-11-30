import React from "react";

const thClass = "py-2 px-4 border-r";
const ThTag = ({ children }) => {
  return <th className={`${thClass}`}>{children}</th>;
};

export default ThTag;
