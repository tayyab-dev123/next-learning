import Link from "next/link";
import React from "react";

const todoListDone = () => {
  return (
    <div>
      Todo List | <Link href="/dashboard">Pending</Link>
    </div>
  );
};

export default todoListDone;
