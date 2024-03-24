"use client";

import Link from "next/link";

// Components

const NavItems = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies/page?genre=popular" },
    { label: "Actors", href: "/actors/page" },
  ];

  return (
    <div className="flex items-center">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-24">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavItems;