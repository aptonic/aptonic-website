'use client'

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import Aptonic from "../shared/icons/aptonic";
import { usePathname } from 'next/navigation'


export default function NavBar({isBlog}) {
  //const { SignInModal, setShowSignInModal } = useSignInModal();
  //  const scrolled = useScroll(50);

  const containerClassName = `mx-5 flex h-16 max-w-screen-2xl grow items-center ${
    isBlog ? "justify-between" : "justify-around"
  }`;

  return (
    <>
      <div className="fixed z-20 top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl flex justify-center">
        <div className={containerClassName}>
          <Link href="/" className="flex items-center font-display text-2xl">
            <Aptonic className="ml-5 opacity-70" />
          </Link>
          <div className="flex justify-end gap-10 mr-10 md:gap-20 md:mr-20">
            <Link href="/" className={`invisible sm:visible ${usePathname() == '/' ? 'font-bold' : 'font-normal'}`}>
              Home
            </Link>
            <Link href="/blog" className={usePathname()?.startsWith('/blog') ? 'font-bold' : 'font-normal'}>
              Blog
            </Link>
            <Link href="/support" className={usePathname()?.startsWith('/support') ? 'font-bold' : 'font-normal'}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
