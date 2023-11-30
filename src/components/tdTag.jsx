import React from "react";

const tdClass = "py-2 px-4 border-r";
const TdTag = ({ children }) => {
  return <td className={`${tdClass}`}>{children}</td>;
};

export default TdTag;
