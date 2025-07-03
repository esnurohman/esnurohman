"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "services",
    path: "/services",
  },
  // {
  //   name: "Contact",
  //   path: "/contact",
  // },
];

const NavLinks = ({ containerStyles }: { containerStyles: string }) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        // menentukan link yang aktif
        const isActive = pathname === link.path;

        const charLength = link.name.length;

        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";
        return (
          <Link
            key={index}
            href={link.path}
            className={`relative text-lg uppercase text-white ${
              isActive &&
              `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
            } `}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;
