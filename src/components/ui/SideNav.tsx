import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <button onClick={toggleNav} className="text-2xl text-light">
        <TbMenu2 />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeNav}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-4">
          <button
            onClick={closeNav}
            className="text-white text-2xl absolute top-4 right-4"
          >
            &times;
          </button>
          <h2 className="text-lg font-semibold">Side Navigation</h2>
          <ul className="mt-4">
            <li>
              <a href="#section1" className="block py-2 px-4 hover:bg-gray-700">
                Section 1
              </a>
            </li>
            <li>
              <a href="#section2" className="block py-2 px-4 hover:bg-gray-700">
                Section 2
              </a>
            </li>
            <li>
              <a href="#section3" className="block py-2 px-4 hover:bg-gray-700">
                Section 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
