import React, { useState } from "react";
import { TbMenu2, TbMailFilled } from "react-icons/tb";
import { MdClose, MdCall, MdFacebook, MdLocationPin } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/logo.png";

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
        className={`fixed top-0 left-0 w-full h-screen text-dark transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-50`}
      >
        <div
          className="absolute inset-0 size-full bg-cover -z-10"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1704870086/vector/abstract-gray-and-white-color-gradient-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=U_tzoW8Rktdydkc8Ng-O-1kPI-r7BcJun-o2O3n2nvM=")',
          }}
        ></div>
        <div className="px-12 pt-2 pb-14 flex items-center justify-between flex-col gap-16 size-full">
          <div className="flex items-center justify-between relative w-full">
            <ul className="w-1/3 flex items-center gap-3">
              {/* <li>
                <a href="#" className="text-xl"><MdFacebook /></a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="text-base inline-flex items-center justify-end gap-1 tracking-wide uppercase"
                >
                  <MdCall className="text-xl" /> +977-9851339832
                </a>
              </li>
            </ul>
            <a href="/" className="flex-grow flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className={`filter-black h-24 object-contain transition-all duration-500`}
              />
            </a>
            <button
              onClick={closeNav}
              className="w-1/3 text-xs inline-flex items-center justify-end gap-1 tracking-widest uppercase"
            >
              Close
              <MdClose className="text-3xl" />
            </button>
          </div>
          <div className="w-full">
            <div className="relative grid grid-cols-4">
              <div className="col-span-1">
                {/* <span className="uppercase text-dark/40 mb-8">Menu</span> */}
                <ul className="links flex items-start justify-start gap-2 md:gap-24 flex-col">
                  <li className="w-full">
                    <a
                      href="#"
                      className="navlink w-full pb-2 inline-block font-luxury text-4xl text-dark tracking-widest uppercase"
                      aria-label="Silver Rings"
                    >
                      Rings
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href="#"
                      className="navlink w-full pb-2 inline-block font-luxury text-4xl text-dark tracking-widest uppercase"
                      aria-label="Jewelry"
                    >
                      Jewelry
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href="#"
                      className="navlink w-full pb-2 inline-block font-luxury text-4xl text-dark tracking-widest uppercase"
                      aria-label="Stones"
                    >
                      Stones
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href="aboutPage.html"
                      className="navlink w-full pb-2 inline-block font-luxury text-4xl text-dark tracking-widest uppercase"
                      aria-label="Gallery"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-3 space-y-10">
                <div>
                  <span className="uppercase text-dark/80">Our Products</span>
                  <div className="mt-4 grid grid-cols-4 gap-5">
                    <div className="group space-y-2">
                      <img
                        src="https://kalpamart.com/media/products/Sterling-Silver-Infinity-CZ-Diamond-Ring-MR051R-600x600.jpg"
                        alt="Silver Ring"
                        className="w-full h-64 object-contain bg-white shadow-md group-hover:shadow-lg transition-all duration-300"
                      />
                      <h4 className="text-lg font-medium text-dark/80 flex items-center gap-2">
                        <span className="h-[1px] w-12 group-hover:w-4 bg-dark/80 transition-all duration-300"></span>
                        Silver Ring
                      </h4>
                    </div>
                    <div className="group space-y-2">
                      <img
                        src="https://kalpamart.com/media/products/Sterling-Silver-Infinity-CZ-Diamond-Ring-MR051R-600x600.jpg"
                        alt="Silver Ring"
                        className="w-full h-64 object-contain bg-white shadow-md group-hover:shadow-lg transition-all duration-300"
                      />
                      <h4 className="text-lg font-medium text-dark/80 flex items-center gap-2">
                        <span className="h-[1px] w-12 group-hover:w-4 bg-dark/80 transition-all duration-300"></span>
                        Silver Ring
                      </h4>
                    </div>
                    <div className="group space-y-2">
                      <img
                        src="https://kalpamart.com/media/products/Sterling-Silver-Infinity-CZ-Diamond-Ring-MR051R-600x600.jpg"
                        alt="Silver Ring"
                        className="w-full h-64 object-contain bg-white shadow-md group-hover:shadow-lg transition-all duration-300"
                      />
                      <h4 className="text-lg font-medium text-dark/80 flex items-center gap-2">
                        <span className="h-[1px] w-12 group-hover:w-4 bg-dark/80 transition-all duration-300"></span>
                        Silver Ring
                      </h4>
                    </div>
                    <div className="group space-y-2">
                      <img
                        src="https://kalpamart.com/media/products/Sterling-Silver-Infinity-CZ-Diamond-Ring-MR051R-600x600.jpg"
                        alt="Silver Ring"
                        className="w-full h-64 object-contain bg-white shadow-md group-hover:shadow-lg transition-all duration-300"
                      />
                      <h4 className="text-lg font-medium text-dark/80 flex items-center gap-2">
                        <span className="h-[1px] w-12 group-hover:w-4 bg-dark/80 transition-all duration-300"></span>
                        Silver Ring
                      </h4>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="max-w-3xl text-dark">
                    Jewellery Store in Jyatha Thamel since 2016. Remember for
                    all kinds of silver and metal jewellery, semi precious
                    stones at reasonable price and quality. Get what u think it
                    is. We give full information on what u are buying.
                  </p>
                  <ul className="flex items-center gap-4 mt-5">
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <MdFacebook className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          Precious Care Collection
                        </label>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <IoLogoWhatsapp className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          +977-9851339832
                        </label>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <TbMailFilled className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          preciouscarecollection@gmail.com
                        </label>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <MdLocationPin className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          Jyatha Thamel, Kathmandu, Nepal
                        </label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between relative w-full">
            <p>&copy; 2024 Precious Care. All Rights Reserved.</p>
            <p className="flex item-center group">
              Developed by
              <a
                className="ml-1 font-semibold flex items-center gap-1"
                rel="noreferrer"
                href="https://www.purnashrestha.com.np/"
                target="_blank"
              >
                <span className="h-[1px] w-1 group-hover:w-6 bg-dark/80 transition-all duration-300"></span>
                Purna Shrestha
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
