import React from "react";
import logo from "../public/logo.png";
import logoDark from "../public/logo-dark.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const StickyHeader = ({ isMenuOpen, toggleMenu }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.getElementById("main");
      if (mainElement) {
        setIsSticky(mainElement.scrollTop > 500);
      }
    };

    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isSticky && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{
              y: -100,
            }}
            style={{
              boxShadow: "rgba(135, 80, 247, 0.2) 0px 0px 30px 0px",
            }}
            className="dark:bg-main-bg bg-off-white fixed top-0 left-0 z-50 w-full"
          >
            <div className="relative container mx-auto pt-[15px] pb-5 xl:pt-7 xl:pb-5">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <ul className="flex items-center gap-x-[15px] xl:gap-x-[35px]">
                    <li>
                      <a className="logo" href="/">
                        <img
                          className="hidden h-15 w-15 dark:inline-block"
                          src={logo}
                          style={{ color: "transparent" }}
                        />
                        <img
                          className="inlin-block h-15 w-15 dark:hidden"
                          src={logoDark}
                          style={{ color: "transparent" }}
                        />
                      </a>
                    </li>
                    <li className="hidden md:block">
                      <a
                        className="text-secondary-color dark:text-white-color text-[15px] font-medium"
                        href="mailto:mail@gerolddesign.com"
                      >
                        mail@gariodavis.com
                      </a>
                    </li>
                  </ul>
                </div>
                <nav>
                  <ul className="flex items-center gap-x-5 xl:gap-x-[30px] 2xl:gap-x-[45px]">
                    <li className="nav_item group relative hidden lg:block">
                      <a
                        className="text-secondary-color dark:text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                        href="#services"
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav_item group relative hidden lg:block">
                      <a
                        className="text-secondary-color dark:text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                        href="#portfolio"
                      >
                        Works
                      </a>
                    </li>
                    <li className="nav_item group relative hidden lg:block">
                      <a
                        className="text-secondary-color dark:text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                        href="#resume"
                      >
                        Resume
                      </a>
                    </li>
                    <li className="nav_item group relative hidden lg:block">
                      <a
                        className="text-secondary-color dark:text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                        href="#skills"
                      >
                        Skills
                      </a>
                    </li>
                    <li className="nav_item group relative hidden lg:block">
                      <a
                        className="text-secondary-color dark:text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                        href="#testimonials"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="nav_item group relative hidden lg:block">
                      <a
                        className="text-secondary-color dark:text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          backgroundSize: "200%",
                        }}
                        className="text-white-color bg-200 ml-[10px] rounded-full bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] px-[35px] py-[17px] text-[15px] leading-1 font-bold capitalize transition-all duration-300 hover:bg-[-100%]"
                        href="#contact"
                      >
                        Hire Me!
                      </a>
                    </li>
                    <li className="menu-bar lg:hidden">
                      <div className="menu-bar">
                        <button
                          onClick={toggleMenu}
                          className={`${isMenuOpen ? "active" : ""}`}
                        >
                          <span />
                          <span />
                          <span />
                          <span />
                        </button>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyHeader;
