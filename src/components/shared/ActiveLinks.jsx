"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ path, children }) => {
  const pathname = usePathname();

  const isActive = pathname === path;
  console.log(path)
  return (
    <Link
      className={`${
        isActive && "text-[#2EBAD6]"
      } link text-gray-700 capitalize text-xl transform transition-all duration-400 hover:text-[#2EBAD6]`}
      href={path}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
