"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavBackground(
          "border-b border-slate-600 backdrop-blur-md bg-opacity-40"
        );
      } else {
        setNavBackground(
          "border-b border-transparent backdrop-blur-none bg-opacity-50"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar sticky top-0 z-50 transition-all duration-300 bg-black text-white ${navBackground}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent text-sm justify-start"
          >
            <div className="avatar">
              <div className="w-8 rounded-full">
                <Image
                  src="/media/gawx-pfp.jpg"
                  alt="gawx pfp"
                  width={160}
                  height={160}
                />
              </div>
            </div>
            GawxArt
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-transparent rounded-box z-[1] w-max shadow p-1"
          >
            <li>
              <Link
                target="_blank"
                href="https://www.youtube.com/@GawxArt/"
                tabIndex={0}
                role="button"
                className="btn rounded-none rounded-t-box bg-black px-3 text-sm justify-start"
              >
                <FontAwesomeIcon icon={faYoutube} color="red" width={23} />
                @GawxArt
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/gawx_art/"
                tabIndex={0}
                role="button"
                className="btn rounded-none bg-black px-3 text-sm"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="#833ab4"
                  width={23}
                />
                @gawx_art
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                tabIndex={0}
                role="button"
                className="btn rounded-none rounded-b-box bg-black px-3 text-sm justify-start"
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  color="#833ab4"
                  width={23}
                />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="font-bold">the digital sketchbook</Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default NavBar;
