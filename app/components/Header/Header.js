"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Searches from "./Searches";
import SearchBar from "./SearchBar";

const navbarData = [
  {
    name: "Home",
    link: "/",
    img: "/images/home.svg",
    alt: "/images/home_hover.svg",
  },
  {
    name: "My Collection",
    link: "/mycollection",
    img: "/images/playlist.svg",
    alt: "/images/playlist_hover.svg",
  },
  {
    name: "Radio",
    link: "/radio",
    img: "/images/radio.svg",
    alt: "/images/radio_hover.svg",
  },
  {
    name: "Music Videos",
    link: "/videos",
    img: "/images/videos.svg",
    alt: "/images/videos_hover.svg",
  },
  {
    name: "Profile",
    link: "/profile",
    img: "/images/profile.svg",
    alt: "/images/profile_hover.svg",
  },
  {
    name: "Logout",
    link: "/logout",
    img: "/images/logout.svg",
    alt: "/images/logout_hover.svg",
  },
];

const Header = () => {
  const loc = usePathname();
  const [show, setShow] = useState(false);

  return (
    <header className="p-4 bg-bgDark z-[8] flex items-center gap-4 sticky top-0 md:flex-col md:gap-[5%] md:z-[7]">
      <div
        className="flex flex-col gap-2 md:hidden"
        onClick={() => setShow((prev) => !prev)}
      >
        <div className="h-[2px] w-[23px] bg-textWhite"></div>
        <div className="h-[2px] w-[23px] bg-textWhite"></div>
      </div>

      <img className="w-[2.5rem]" src="/images/Logo.svg" alt="logo" />

      <nav className="hidden md:flex md:flex-col bg-bgDark">
        <ul className="flex flex-col gap-10 bg-bgDarker p-4 rounded-3xl">
          {navbarData.map(({ name, img, link, alt }) => {
            if (name === "home") {
              return (
                <li key={name}>
                  <Link
                    href={link}
                    className="flex items-center gap-4 text-xl text-textWhite"
                  >
                    <img
                      className="w-[1.7rem]"
                      src={loc === link ? alt : img}
                      alt={name}
                    />
                    <p className="hidden">{name}</p>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={name}>
                  <Link
                    href={link}
                    className="flex items-center gap-4 text-xl text-textWhite pointer-events-none"
                  >
                    <img
                      className="w-[1.7rem]"
                      src={loc === link ? alt : img}
                      alt={name}
                    />
                    <p className="hidden">{name}</p>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      {show && (
        <nav className="nav_animation absolute top-0 left-0 py-[6rem] px-[3rem] bg-bgDark w-[100vw] h-[100vh]">
          <IoClose
            size={40}
            color="#EFEEE0"
            className="absolute right-5 top-4"
            onClick={() => setShow((prev) => !prev)}
          />
          <ul className="flex flex-col gap-10">
            {navbarData.map(({ name, img, link, alt }) => {
              if (name === "Home") {
                return (
                  <li key={name} onClick={() => setShow((prev) => !prev)}>
                    <Link
                      href={link}
                      className="flex items-center gap-4 text-xl text-textWhite"
                    >
                      <img
                        className="w-[1.7rem]"
                        src={loc === link ? alt : img}
                        alt={name}
                      />
                      <p>{name}</p>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={name} onClick={() => setShow((prev) => !prev)}>
                    <Link
                      href={link}
                      className="flex items-center gap-4 text-xl text-textWhite pointer-events-none"
                    >
                      <img
                        className="w-[1.7rem]"
                        src={loc === link ? alt : img}
                        alt={name}
                      />
                      <p>{name}</p>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      )}

      <span className="md:hidden">
        <SearchBar />
      </span>
    </header>
  );
};
export default Header;
