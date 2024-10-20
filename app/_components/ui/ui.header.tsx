import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="fixed top-0 bg-[#262b31] w-full z-[900]">
      <nav className="relative px-5 lg:px-24">
        <div className="flex relative flex-wrap justify-between items-center mx-auto max-w-screen-xl text-white">
          <Link href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              INVOICE
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <Link
              href="#"
              className="px-2 font-medium py-6 hover:bg-[#3851488e] duration-200"
            >
              Login
            </Link>
            <span className="w-[2px] py-6 h-full bg-[#2e3e388e]" />
            <Link
              href="#"
              className="px-2 font-medium py-6 hover:bg-[#3851488e] duration-200"
            >
              Sign Up
            </Link>
            <button className="max-md:inline-flex items-center p-2 ml-1 text-sm text-slate-200 rounded-lg hidden hover:bg-[#121214] duration-200">
              Icon
            </button>
          </div>
          <div className="justify-between items-center w-full md:flex flex-auto md:justify-center md:pr-8 md:w-auto md:order-1 md:visible md:h-full">
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
