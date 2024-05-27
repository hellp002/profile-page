"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkObj = [
  { href: "./", text: "Home" },
  { href: "./project", text: "project" },
  { href: "./certificate", text: "Certificate" },
];

export function Navbar() {
  const url = usePathname();
  const compare = "." + url;
  return (
    <nav className="flex justify-between w-full bg-indigo-600 bg-opacity-70 sticky text-white">
      <ul className="flex items-center w-3/5 md:w-2/5 lg:w-1/5 h-full">
        {linkObj.map((obj) => {
          return (
            <Link href={obj.href} key={obj.href}>
              <li
                className={
                  "hover:bg-red-400 py-6 px-2 md:p-6 h-full " +
                  (compare === obj.href ? "bg-slate-400" : "")
                }
              >
                {obj.text}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="flex justify-center items-center rounded-lg bg-black m-4 px-2 border-black border-4">
        <Link href={"https://github.com/hellp002"}>My Github</Link>
      </div>
    </nav>
  );
}
