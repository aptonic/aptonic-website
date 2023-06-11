"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import Aptonic from "../shared/icons/aptonic";
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className="fixed z-20 top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl"
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Aptonic className="opacity-70" />
          </Link>

          <div className="flex justify-end gap-10 mr-10 md:gap-20 md:mr-20">
            <Link href="/" className={usePathname() == '/' ? 'font-bold' : 'font-normal'}>
              Home
            </Link>
          
            <Link href="/blog" className={usePathname().startsWith('/blog') ? 'font-bold' : 'font-normal'}>
              Blog
            </Link>

            <Link href="/support" className={usePathname().startsWith('/support') ? 'font-bold' : 'font-normal'}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
