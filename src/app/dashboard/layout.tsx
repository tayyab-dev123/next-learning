import React from "react";

const layout = ({
  children,
  todolist,
  itemlist,
}: Readonly<{
  children: React.ReactNode;
  todolist: React.ReactNode;
  itemlist: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex gap-3  ">
        <div className="card px-3 py-2 bg-cyan-800 rounded-md">{todolist}</div>
        <div className="card px-3 py-2 bg-cyan-800 rounded-md">{itemlist}</div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default layout;
