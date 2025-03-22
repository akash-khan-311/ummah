import Link from "next/link";
import React from "react";

export default function Button({ path, children }) {
  return (
    <div className="theme-btn transition-all duration-500 lg:px-5 lg:py-2 md:py-2 md:px-5 px-4 py-2 mr-3 md:mr-3 lg:mr-0 font-bold cursor-pointer">
      <Link href={path}>{children}</Link>
    </div>
  );
}
