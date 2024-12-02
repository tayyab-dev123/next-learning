import Link from "next/link";
import React from "react";

const i2 = () => {
  return (
    <div>
      i2 <br /> go to
      <Link href="/i1">
        <p className="bg-slate-600 px-4 py-2">i1</p>
      </Link>
    </div>
  );
};

export default i2;
