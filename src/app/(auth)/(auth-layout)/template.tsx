import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Auth Heading</h1>
      <input type="text" placeholder="Search" />
      {children}
    </div>
  );
};

export default layout;
