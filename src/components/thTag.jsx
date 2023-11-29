import React from "react";

const tdClass = "py-2 px-4 border-r";
const ThTag = ({ children }) => {
  return <th className={`${tdClass}`}>{children}</th>;
};

export default ThTag;
