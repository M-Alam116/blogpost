"use client";

import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className="flex justify-between gap-[2rem] items-center py-[15px]">
      <Link href="/" className="text-[28px] font-[700] title">
        M. Alam
      </Link>
      <div className="hidden md:flex gap-[1.5rem] items-center">
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="text-[18px] font-[500]"
          >
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            className="py-[5px] px-[8px] border-none text-white text-[14px] font-[500] bg-btnBg cursor-pointer rounded-[3px]"
            onClick={signOut}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
