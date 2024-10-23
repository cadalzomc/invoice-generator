/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IconHamburger } from "@/app/_components/icons";
export const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const headerRef = useRef<any>(null);

  useEffect(() => {
    const HandleCLickOutside = ({ target }: MouseEvent) => {
      if (!headerRef.current) return;
      if (headerRef.current.contains(target)) return;
      setDropDown(false);
    };

    document.addEventListener("click", HandleCLickOutside);
    return () => document.removeEventListener("click", HandleCLickOutside);
  });
  return (
    <header ref={headerRef} className="fixed top-0 bg-[#262b31] w-full z-[900]">
      <nav className="relative px-5 lg:px-24 max-md:my-4">
        <div className="flex relative flex-wrap justify-between items-center mx-auto max-w-screen-xl text-white">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="max-md:inline-flex items-center mt-1 p-2 text-sm text-slate-200 rounded-lg hidden hover:bg-[#121214] duration-200"
            >
              <IconHamburger className="size-6" />
            </button>
            <Link href="#">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                INVOICE
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4 md:order-2">
            <Link href="#" className="font-medium hover:text-[#a6c76d] duration-200">
              Login
            </Link>
            <Link
              href="#"
              className="px-3 font-medium py-2 rounded-lg bg-[#446f30] hover:bg-opacity-85 duration-200"
            >
              Sign Up
            </Link>
          </div>
          <div
            className={[
              "justify-between items-center w-full md:flex flex-auto md:justify-center md:pr-8 md:w-auto md:order-1 md:visible md:h-full",
              dropDown ? "dropdown-content open" : "dropdown-content",
            ].join(" ")}
          >
            <ul className="flex flex-col mt-4 font-medium max-md:gap-y-1 md:flex-row md:space-x-1 md:mt-0">
              <li>
                <Link
                  href="#"
                  className="block hover:bg-[#3851488e] py-2 md:py-6 px-4 duration-200 w-full md:w-auto bg-[#3851488e] md:bg-[#3851488e]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-[#3851488e] py-2 md:py-6 px-4 duration-200 w-full md:w-auto"
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-[#3851488e] py-2 md:py-6 px-4 duration-200 w-full md:w-auto"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
