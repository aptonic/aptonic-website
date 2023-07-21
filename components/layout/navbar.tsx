"use client";

import Link from "next/link";
import Aptonic from "../shared/icons/aptonic";
import { usePathname } from "next/navigation";

export default function NavBar({ isBlog }) {
  const containerClassName = `mx-5 flex h-16 max-w-screen-2xl grow items-center ${
    isBlog ? "justify-between" : "justify-around"
  }`;

  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 z-20 flex w-full justify-center border-b border-gray-200 bg-white/50 backdrop-blur-xl">
        <div className={containerClassName}>
          <Link href="/" className="flex items-center font-display text-2xl">
            <Aptonic className="ml-5" />
          </Link>
          <div className="mr-10 flex justify-end gap-10 md:mr-20 md:gap-20">
            <Link
              prefetch={false}
              href="/"
              className={`invisible w-[46px] sm:visible ${
                usePathname() == "/" ? "font-bold " : "font-normal"
              }`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`w-[32px] ${
                pathname?.startsWith("/blog") ? "font-bold" : "font-normal"
              }`}
            >
              Blog
            </Link>
            <Link
              prefetch={false}
              href="/support"
              className={`w-[58px] ${
                pathname?.startsWith("/support") ||
                pathname?.startsWith("/actions") ||
                pathname?.startsWith("/guide") ||
                pathname?.startsWith("/upgrade") ||
                pathname?.startsWith("/lost_serial") ||
                pathname?.startsWith("/intro")
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
