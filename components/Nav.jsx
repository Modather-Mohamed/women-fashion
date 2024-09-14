"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", path: "/" },
  { name: "Our Styles", path: "/our-shop" },
];

const Nav = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent"}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
