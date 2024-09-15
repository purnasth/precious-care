import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";

import logo from "../../assets/logo.png";
import { TbUser, TbShoppingCart } from "react-icons/tb";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full px-12 z-40`}>
        <div
          className={`absolute inset-0 size-full ${
            isScrolled
              ? "backdrop-blur-sm bg-black/50"
              : "bg-gradient-to-b from-black/80 to-transparent"
          }`}
        />
        <div className="flex items-center justify-between relative py-2">
          <div className="w-1/3">
            <SearchBar />
          </div>

          <a href="/" className="flex-grow flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "h-14" : "h-24"
              }`}
            />
          </a>

          <div className="w-1/3 flex items-center justify-end gap-5">
            <TbUser className="text-light text-xl" />
            <TbShoppingCart className="text-light text-xl" />
            <SideNav />
          </div>
        </div>
        <hr className="border-light/50" />
      </nav>
    </>
  );
};

export default Navbar;
