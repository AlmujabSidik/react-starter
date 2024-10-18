import React from "react";

const NewSearch = ({ children }) => {
  return (
    <div className="flex flex-col w-full gap-1 sm:max-w-md">{children}</div>
  );
};

export default NewSearch;
