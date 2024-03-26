import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Logo Section */}
          <div className='col-span-1 md:col-span-1 flex justify-center md:justify-start items-center'>
            <div className='footer-logo pl-4'>
              <Link href={{ pathname: "/" }}>
                <Image
                  src='/img/logo/logo.png'
                  alt='Logo'
                  width={100}
                  height={30}
                />
              </Link>
            </div>
          </div>

          {/* Middle Section for Links */}
          <div className='col-span-1 md:col-span-1 lg:text-center'>
            <div className='quick-link-list'>
              <ul className='flex justify-center md:justify-start space-x-6'>
                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>HELP CENTER</a>
                </li>
                <li>
                  <a href='#'>TERMS OF USE</a>
                </li>
                <li>
                  <a href='#'>PRIVACY</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section for Home, Actors, and About Links */}
          <div className='col-span-1 md:col-span-1 lg:text-right pr-4'>
            <nav className='footer-menu'>
              <ul className='flex justify-center md:justify-end space-x-6'>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/actors/page">ACTORS</Link>
                </li>
                <li>
                  <Link href="/about/page">ABOUT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 py-4 pl-4'>
        <div className='container mx-auto'>
          <div className='text-center md:text-left'>
            <p>
              &copy; {new Date().getFullYear()}. All Rights Reserved By{" "}
              <Link
                href={{ pathname: "/about/page" }}
                className='text-yellow-300'
              >
                Team One
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

