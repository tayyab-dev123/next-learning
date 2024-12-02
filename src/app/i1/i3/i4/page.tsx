import Link from "next/link";
import React from "react";

const i4 = () => {
  return (
    <div>
      i4 <br /> go to
      <Link href="/i1/i3">
        <div className="bg-slate-600 flex px-4 py-2 w-full ">i3</div>
      </Link>
    </div>
  );
};

export default i4;
