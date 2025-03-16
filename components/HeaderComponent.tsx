"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function HeaderComponent() {
  return (
    <header>
      <Navbar
        fluid
        rounded
        className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
      >
        <Navbar.Brand as={Link} href="/">
          <img
            src="/icons/logo.svg"
            className="mr-3 h-6 sm:h-9 md:h-10 lg:h-12 xl:h-14 2xl:h-16"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
            Lasles <span className="font-normal">VPN</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <nav className="relative flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:right-0 md:flex-row md:gap-6 md:text-[12px] lg:right-10 lg:flex-row lg:gap-10 lg:text-[16px] xl:flex-row xl:gap-12 2xl:flex-row 2xl:gap-14 ">
            <Navbar.Link href="#" active>
              Features
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
              Pricing
            </Navbar.Link>
            <Navbar.Link href="#">Testimonial</Navbar.Link>
            <Navbar.Link href="#">Help</Navbar.Link>
          </nav>
          <div className="mt-4 flex flex-col items-center gap-4 sm:mt-2 sm:flex-row sm:gap-6 md:mt-1 md:flex-row md:gap-8 lg:mt-0 lg:flex-row lg:gap-10 xl:flex-row xl:gap-12 2xl:flex-row 2xl:gap-14">
            <Navbar.Link href="#" className="relative lg:left-4">
              Sign in
            </Navbar.Link>
            <Navbar.Link href="#">
              <p className="rounded-full border-2 border-[#F53838] bg-white px-4 py-2 text-[#F53838] transition-all hover:bg-[#F53838] hover:text-white sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
                Sign up
              </p>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
