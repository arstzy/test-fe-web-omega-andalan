"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginDialog from "../common/login-dialog";
import { CgFormatJustify } from "react-icons/cg";


interface IProps {
  setBlur: (value: boolean) => void;
}

const Navbar = ({ setBlur }: IProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (mobileMenuOpen) {
      body.style.overflow = "hidden";
      setBlur(true);
    } else {
      body.style.overflow = "visible";
      setBlur(false);
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [mobileMenuOpen, setBlur]);

  const handleOpenMenuMobile = (value: boolean) => {
    setMobileMenuOpen(value);
  };

  const navigations = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="overflow-hidden">
      <div
        className={`w-full hidden md:flex items-center justify-between relative md:px-20 navbar px-2 py-5 z-50 bg-transparent mb-3 transition-all duration-500 ease-in-out`}
      >
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <a
            className="text-xl z-50 font-bold inline-block mr-4 py-2 whitespace-nowrap text-medium-grey hover:text-black transition duration-300"
            href="#"
          >
            <span className="text-3xl font-bold text-white">Home</span>
          </a>
        </div>

        <div className="flex flex-grow items-center gap-x-4 w-max">
          <ul className="flex flex-row list-none md:ml-auto">
            {navigations.map((nav, index) => (
              <li key={index}>
                <Link
                  className="px-8 py-2 flex items-center text-xl font-bold leading-snug text-medium-grey hover:text-black transition duration-300"
                  href={nav.href}
                >
                  <span className="ml-2">{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center transition-all duration-500 transform hover:scale-105"
            onClick={() => setIsDialogOpen(true)}
          >
            Login
          </button>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`w-full z-50 fixed bg-transparent md:hidden mb-3 transition-all duration-500 ease-in-out`}
      >
        <div className="my-5 w-full md:hidden">
          <div className="flex justify-between px-3">
            <button
              className="text-medium-grey cursor-pointer focus:outline-none"
              onClick={() => handleOpenMenuMobile(!mobileMenuOpen)}
              aria-label="Open Menu"
            >
              <CgFormatJustify size={24} />
            </button>
            <a
              className="text-xl z-50 font-bold inline-block mr-4 py-2 whitespace-nowrap text-medium-grey hover:text-black transition duration-300"
              href="#"
            >
              <span className="font-bold z-50 text-black text-sm">Home</span>
            </a>
          </div>

          <div
            className={`transition-all z-50 duration-500 absolute h-screen ease-in-out ${
              mobileMenuOpen ? "left-0" : "-left-[450px]"
            }`}
          >
            <div className="w-screen absolute -top-16">
              <div className="h-screen relative z-50 w-max px-5 bg-sky-200">
                <ul className="flex flex-col py-36 justify-center h-screen max-w-max px-5 ">
                  {navigations.map((nav, index) => (
                    <li className="my-5" key={index}>
                      <Link
                        className="px-3 py-2 flex items-center text-sm opacity-100 font-bold leading-snug text-white hover:text-black transition duration-300"
                        href={nav.href}
                        onClick={() => handleOpenMenuMobile(!mobileMenuOpen)}
                      >
                        <span className="ml-2 text-black">{nav.name}</span>
                      </Link>
                    </li>
                  ))}
                  <button
                    type="button"
                    className="text-white text-base bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center transition-all duration-500 transform hover:scale-105"
                    onClick={() => {
                      setIsDialogOpen(true)
                      handleOpenMenuMobile(false)
                    }}
                  >
                    Login
                  </button>
                </ul>
              </div>
              <div
                className={`w-screen top-0 absolute h-screen ${
                  !mobileMenuOpen && "hidden"
                }`}
                onClick={() => handleOpenMenuMobile(false)}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <LoginDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
