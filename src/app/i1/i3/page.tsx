import Link from "next/link";
import React from "react";

const i3 = () => {
  return (
    <div>
      i3 <br /> go to
      <Link href="./i3/i4">
        <div className="bg-slate-600 flex px-4 py-2 w-full ">i4</div>
      </Link>
    </div>
  );
};

export default i3;
