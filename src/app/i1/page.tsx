import Link from "next/link";
import React from "react";

const i1 = () => {
  return (
    <div>
      i1 <br /> go to
      <Link href="/i1/i2">
        <div className="bg-slate-600 flex px-4 py-2 w-full ">i2</div>
      </Link>
    </div>
  );
};

export default i1;
