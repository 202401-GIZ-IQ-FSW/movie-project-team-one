"use client";
import NavItems from "@/components/Navbar/NavItems";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const user = null;

  return (
    <div className="bg-slate-700 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-slate-700">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center text-[#FDAE0D]">
    
            {/* The app Icon */}
            <div className="ml-4 flex lg:ml-0">
              <Image
                src="/img/logo/logo.png"
                alt="Logo"
                width={96}
                height={96}
              />
            </div>

            {/* Nav items section  */}
            <div className="ml-auto flex items-center">
              <NavItems />
            </div>

            {/* Sign in and Sign Up Nav Section */}
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? null : <Link href="/sign-in">Sign in</Link>}
                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}
                {user ? <p></p> : <Link href="/sign-up">Sign up</Link>}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}