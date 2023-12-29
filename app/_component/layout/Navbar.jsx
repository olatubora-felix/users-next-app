"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const routes = [
  { path: "/", name: "Home" },
  { path: "/users", name: "Users" },
  { path: "/about", name: "About" },
  { path: "/products", name: "Products" },
];
export const Navbar = () => {
  const current = usePathname();
  return (
    <header className=" shadow-lg w-full bg-blue-600">
      <nav className="flex justify-between items-center py-2 max-w-[1208px] mx-auto">
        <Link href="/" className="text-white italic text-2xl font-bold ">
          My App
        </Link>
        <ul className="flex items-center gap-6 ">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`flex items-center gap-6 ${
                  current === route.path
                    ? "text-yellow-700 font-bold"
                    : "text-white"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
