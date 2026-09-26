"use client";

import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
  const pathname = usePathname();
  const { planList, savedList } = useWorkout();

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
              {links}
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
        <div className="navbar-end flex items-center justify-end gap-6">
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm font-medium text-[#E5E7EB] cursor-pointer"
          >
            Plan
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black">
              {planList.length}
            </span>
          </Link>

          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm font-medium text-[#9CA3AF] cursor-pointer hover:text-white transition"
          >
            Saved
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2D333F] bg-[#1A1D24] text-xs font-medium text-[#D1D5DB]">
              {savedList.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
