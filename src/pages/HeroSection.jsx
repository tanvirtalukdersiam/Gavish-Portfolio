import React from "react";
import Header from "../components/Header";
import heroImage from "../public/me.png";
import { Download } from "lucide-react";
import { Twitter } from "lucide-react";
import { Dribbble } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MessageCircle } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { useState } from "react";
import { useEffect } from "react";

const HeroSection = ({ isMenuOpen, toggleMenu }) => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setExperience(14);
      setProjects(50);
      setClients(1.5);
      setYears(14);
    }, 1000);
    return () => clearTimeout(timer);
  }, [experience]);
  return (
    <div className="dark:bg-dark-bg bg-light-bg relative z-1 pb-10 after:absolute after:top-0 after:right-0 after:-z-1 after:-mt-[5%] after:-mr-[5%] after:h-[308px] after:w-[322px] after:rounded-[50%] after:bg-[linear-gradient(260deg,#8750f7,rgba(115,67,210,0))] after:blur-[150px] md:pb-[30px] lg:pb-[50px]">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300" className="overflow-hidden">
          <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
            HI
          </text>
        </svg>
      </div>

      <div className="container mx-auto">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="gap-[30px] pt-[30px] md:grid md:grid-cols-2 md:items-center md:pt-[70px]">
          <div>
            <h4
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="text-secondary-color wow animate__animated animate__fadeInDown dark:text-body-color mb-1.5 text-[22px] font-bold md:text-[22px] lg:text-4xl lg:leading-[1.5] xl:mb-[10px]"
            >
              I am Davis
            </h4>
            <h1
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="wow animate__animated animate__fadeInLeft mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-[35px] font-bold text-transparent md:text-[38px] lg:text-[50px] xl:text-6xl xl:leading-[1.2] 2xl:text-[65px] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
            >
              Next-Level Web <br />
              Developer.
            </h1>
            <div className="my-30px flex items-center justify-center md:hidden">
              <img
                alt="banner image"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
                className="border-secondary-color wow animate__animated animate__swing hover:border-primary-color my-[30px] max-w-[80%] rotate-[4.29deg] rounded-[38px] border-2 transition-all duration-300 hover:rotate-0"
                src={heroImage}
                style={{ color: "transparent" }}
              />
            </div>
            <p
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="text-primary-color-light wow animate__animated animate__fadeInUp dark:text-body-color max-w-[540px] text-[18px] leading-[1.5]"
            >
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="wow animate__animated animate__fadeInUp mt-5 flex flex-wrap items-center gap-[30px] md:mt-[30px] lg:mt-[50px] lg:flex-nowrap lg:gap-[25px]"
            >
              <div>
                <a
                  className="text-primary-color hover:text-body-color hover:bg-primary-color border-primary-color dark:text-body-color block rounded-full border px-[35px] py-[17px] text-[15px] leading-[1] font-medium tracking-[1px] text-nowrap capitalize"
                  href="#contact"
                >
                  Let's Chat
                  {/* <MessageCircle className="ml-[0.5px] inline-block h-[17px]" /> */}
                </a>
              </div>
              <div>
                <ul className="flex gap-x-5">
                  <li>
                    <a
                      className="text-primary-color hover:text-body-color border-primary-color after:bg-primary-color relative z-0 flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-full border after:absolute after:top-1/2 after:left-1/2 after:z-[-1] after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-all after:duration-300 hover:after:scale-105"
                      href="https://www.facebook.com"
                    >
                      <Twitter className="h-[17px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-color hover:text-body-color border-primary-color after:bg-primary-color relative z-0 flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-full border after:absolute after:top-1/2 after:left-1/2 after:z-[-1] after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-all after:duration-300 hover:after:scale-105"
                      href="https://www.facebook.com"
                    >
                      <Dribbble className="h-[17px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-color hover:text-body-color border-primary-color after:bg-primary-color relative z-0 flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-full border after:absolute after:top-1/2 after:left-1/2 after:z-[-1] after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-all after:duration-300 hover:after:scale-105"
                      href="https://www.linkedin.com"
                    >
                      <Linkedin className="h-[17px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-color hover:text-body-color border-primary-color after:bg-primary-color relative z-0 flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-full border after:absolute after:top-1/2 after:left-1/2 after:z-[-1] after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-all after:duration-300 hover:after:scale-105"
                      href="https://www.github.com"
                    >
                      <Github className="h-[17px]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="after:w-220px after:h-220px after:rounded-50% after:bg-gradient-circle after:-mt-5% after:-mr-5% relative hidden after:absolute after:bottom-0 after:left-0 after:-z-1 after:blur-[150px] md:flex md:items-center md:justify-center">
            <img
              alt="banner image"
              className="border-secondary-color wow animate__animated animate__swing hover:border-primary-color !max-h-[437px] rotate-[4.29deg] rounded-[38px] border-2 transition-all duration-300 hover:rotate-0"
              src={heroImage}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="text-primary-color dark:text-body-color mt-[60px] grid grid-cols-2 gap-x-6 gap-y-[30px] lg:grid-cols-4 xl:mt-[70px] 2xl:mt-30">
          <div className="flex flex-col flex-wrap items-center justify-center gap-[15px] sm:flex-row sm:flex-nowrap lg:justify-start">
            <div className="inline-flex items-center text-[45px] font-medium md:text-[55px] xl:text-[64px]">
              <NumberFlow value={experience} />
            </div>
            <div className="text">
              Years of <br />
              Experience
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-[15px] sm:flex-row sm:flex-nowrap lg:justify-start">
            <div className="inline-flex items-center text-[45px] font-medium md:text-[55px] xl:text-[64px]">
              <NumberFlow value={projects} />K
            </div>
            <div className="text">
              Projects <br />
              Completed
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-[15px] sm:flex-row sm:flex-nowrap lg:justify-start">
            <div className="inline-flex items-center text-[45px] font-medium md:text-[55px] xl:text-[64px]">
              <NumberFlow value={clients} />K
            </div>
            <div className="text">
              Happy <br />
              Clients
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-[15px] sm:flex-row sm:flex-nowrap lg:justify-start">
            <div className="inline-flex items-center text-[45px] font-medium md:text-[55px] xl:text-[64px]">
              <NumberFlow value={years} />
            </div>
            <div className="text">
              Years of <br />
              Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
