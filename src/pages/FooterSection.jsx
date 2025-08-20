import React from "react";
import Logo from "../public/logo.png";
const FooterSection = () => {
  return (
    <footer>
      <div className="dark:bg-dark-bg bg-[#2a1454]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center pt-[50px] pb-5 md:pt-[60px]">
            <div className="footer-logo mb-6 h-[75px] w-[75px]">
              <div href="/">
                <img
                  className="wow animate__animated animate__headShake"
                  src={Logo}
                />
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap items-center justify-center gap-x-[35px]">
                <li className="group relative">
                  <div
                    className="text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                    href="#about"
                  >
                    About
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                    href="#services"
                  >
                    Services
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                    href="#portfolios"
                  >
                    Portfolios
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="text-white-color relative z-0 py-[10px] text-[15px] font-medium capitalize after:absolute after:right-0 after:bottom-[25px] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8750f7] after:via-[#2a1454] after:to-[#8750f7] after:bg-[length:200%] after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-[15px] lg:py-[25px] 2xl:py-[30px]"
                    href="#contact"
                  >
                    Contact
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-gray-color-2 mt-5 text-sm whitespace-nowrap md:text-base">
              © 2024 All rights reserved by{" "}
              <a href="#" className="text-white-color hover:text-primary-color">
                Md Tanvir
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
