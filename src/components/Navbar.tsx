import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <>
      <nav className="w-full relative flex items-center justify-between
       max-w-4xl mx-auto px-4
        py-5">
          
        <Link href='/' className="font-bold text-2xl">FR <span className="text-blue-600 dark:text-primary">Blogs</span></Link>
        <ul className="flex gap-5">
          {/* <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">New Blogs</Link>
          </li>
          <li>
            <Link href="/">Fav Blogs</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li> */}
          <ModeToggle/>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
