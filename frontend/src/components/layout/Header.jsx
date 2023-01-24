import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "../../components";

import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const navigate = useNavigate();
  const {cartItems} = useSelector((state) => state.cart);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const [openSearchPalette, setOpenSearchPalette] = useState(false);

  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "k" && (event.metaKey || event.altKey)) {
        setOpenSearchPalette(!openSearchPalette);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openSearchPalette]);

  return (
    <>
      <Search
        setOpenSearchPalette={setOpenSearchPalette}
        openSearchPalette={openSearchPalette}
        navigate={navigate}
      />
      <header>
        <div className="flex h-12 items-center justify-between bg-primary px-4 sm:px-10 xl:px-24">
          <div className="h-full">
            <button
              className="inline-block h-full rounded bg-primaryDarkShade p-2 lg:hidden"
              onClick={toggleSideBar}
            >
              <span className="h-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            </button>
            {isSideBarOpen && (
              <>
                <motion.div
                  initial={{ x: "-100%", duration: 0.5 }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: "100%",
                  }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  className={`overflow-y-auto} fixed top-0 left-0 z-50 h-screen w-72 bg-white uppercase shadow-2xl`}
                >
                  <div className="my-4 mx-0 flex items-center justify-end p-2">
                    <motion.span
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="h-7 w-7 cursor-pointer text-primary hover:text-gray-600"
                      onClick={toggleSideBar}
                    >
                      <VscChromeClose className="h-full w-full" />
                    </motion.span>
                  </div>
                  <div className={`w-full space-x-6 text-xs font-semibold`}>
                    <ul className="w-full tracking-wider">
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b border-t py-4 px-10 duration-300 hover:shadow"
                          to={"/"}
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        >
                          HOME
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/products"}
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        >
                          Shop
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/faq"}
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        >
                          Frequently Asked
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/faq"}
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/terms-and-condition"}
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        >
                          Terms & condition
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/privacy-policy"}
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        >
                          Privacy & policy
                        </Link>
                      </li>
                      {!user && !loading && (
                        <>
                          <li className="flex h-max w-full">
                            <Link
                              className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                              to={"/login"}
                              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                            >
                              Login
                            </Link>
                          </li>
                          <li className="flex h-max w-full">
                            <Link
                              className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                              to={"/register"}
                              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                            >
                              Register
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                  onClick={toggleSideBar}
                  className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-backdropBlur px-5"
                />
              </>
            )}
            <ul className="hidden h-full items-center text-sm font-bold text-white lg:flex">
              <li className="relative">
                <Link
                  className="relative p-3 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                  after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                  hover:after:scale-x-100"
                  to={"/"}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="relative p-3 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary
                  after:transition-transform after:duration-200 after:ease-out after:content-['']
                  hover:after:origin-bottom-left hover:after:scale-x-100"
                  to={"/products"}
                >
                  SHOP
                </Link>
              </li>
              <li>
                <Link
                  className="relative p-3 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary
                  after:transition-transform after:duration-200 after:ease-out after:content-['']
                  hover:after:origin-bottom-left hover:after:scale-x-100"
                  to={"/faq"}
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  className="relative p-3 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                  after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                  hover:after:scale-x-100"
                  to={"/contact-us"}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <motion.div className="relative h-full">
            <Link
              to={"/cart"}
              className="relative flex h-full items-center bg-primaryDarkShade p-2.5 font-bold uppercase text-white lg:justify-center lg:p-[20px]"
            >
              <span className="h-full lg:absolute lg:flex lg:items-center lg:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="absolute top-0 left-[1.5rem] z-20 box-border flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white lg:left-4 lg:h-4 lg:w-4">
                  {cartItems.length}
                </span>
              </span>
            </Link>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
