import React, { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="px-3 md:px-4 lg:px-10">{children}</div>;
};

export default Container;
