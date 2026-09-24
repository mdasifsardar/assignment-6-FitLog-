"use client";

import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={
            pathname === "/"
              ? "text-[#C2F800] bg-[#1A2312] py-[6px] px-[16px] rounded-2xl"
              : "text-[#9CA3AF]"
          }
          href="/"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          className={
            pathname === "/myplan"
              ? "text-[#C2F800] bg-[#1A2312] py-[6px] px-[16px] rounded-2xl"
              : "text-[#9CA3AF]"
          }
          href="/myplan"
        >
          My plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#0C0D10] border-b border-[#1C1F26] sticky top-0 z-50 backdrop-blur-2xl">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="text-[#FFFFFF] flex gap-2 items-center font-bold"
          >
            <Image src={logo} alt="logo" />
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
        </div>

        {/* button */}
        <div className="navbar-end text-center space-x-2">
          <a className="btn">Plan 0</a>
          <a className="btn">Saved 0</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
