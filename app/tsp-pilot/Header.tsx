"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import Menu from "./Menu";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const scrolled = useScroll(50);
  const header_content = {
    logo: {
      title: "TSP Pilot",
      path: "@public/image/Icon.svg",
    },
    menu: [
      {
        title: "Accueil",
      },
      {
        title: "A Propos",
      },
      {
        title: "Nos solutions",
      },
      { 
        title: "L’Equipe dirigeante"     
      },
      { 
        title: "Nos partenaires"     
      },
      { 
        title: "FAQ"     
      },
      { 
        title: "Contacts"     
      },
    ],
  };
  return (
    <>
    <div
      className={`fixed top-0 w-full flex justify-center ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"} z-30 transition-all`}

    >
    <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
        <Link href="/" className="flex items-center font-display text-xl">
          <div className="mr-2">
            <p className="text-base">email@test.fr</p>
          </div>
          <div className="mr-2">
            <div className="border-r border-gray-900 h-6 mx-2"></div>
          </div>
          <div className="mr-2">
            <p className="text-base">+34444444444</p>
          </div>
        </Link>
        <div className="flex items-center">

          <div className="hidden lg:flex">
            <button
              className="rounded-full p-1.5 px-4 text-base text-base text-black transition-all hover:bg-white hover:text-gray-900 mr-2 text-base"
            >
              Inscription
            </button>
            <button
              className="rounded-full border border-black  text-base bg-black p-1.5 px-4  text-white text-base transition-all hover:bg-white hover:text-gray-900"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
    <header
      className={`fixed top-16 w-full flex justify-center border-t border-b border-gray-200 ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"} z-30 transition-all`}

    >
        <nav className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          {/* Logo */}
          <Image
            src={header_content?.logo?.path}
            height={30}
            width={146}
            priority
            alt="logohere" />

          {/* Nav menu items */}
          <ul className="item-center justify-between w-full  hidden flex-row space-x-8 lg:flex text-base">
            {header_content?.menu &&
              header_content?.menu.map((item, i) => (
                <li
                  className="cursor-pointer transition hover:text-blue-600"
                  key={i}
                >
                  {item?.title}
                </li>
              ))}
          </ul>

          <div>


            {/* Menu Icon */}
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </div>
          </div>
        </nav>
        <Menu menu={menu} />
    </header>
    </>
  );
}
