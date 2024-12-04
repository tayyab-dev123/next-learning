import React from "react";

const layout = ({
  children,
  todolist,
  itemlist,
  loginscreen,
}: Readonly<{
  children: React.ReactNode;
  todolist: React.ReactNode;
  itemlist: React.ReactNode;
  loginscreen: React.ReactNode;
}>) => {
  // let isActiveUser = false;
  return isActiveUser ? (
    <>
      <div>{children}</div>
      <div className="flex gap-3  ">
        <div className="card px-3 py-2 bg-cyan-800 rounded-md">{todolist}</div>
        <div className="card px-3 py-2 bg-cyan-800 rounded-md">{itemlist}</div>
      </div>
    </>
  ) : (
    <div>{loginscreen}</div>
  );
};

export default layout;
