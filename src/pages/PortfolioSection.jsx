import React, { useState, useEffect, useRef } from "react";
import Deloitte from "../public/2.jpg";
import newAge from "../public/3.jpg";
import Mochnix from "../public/1.jpg";
import Sebastian from "../public/4.jpg";
import { MoveUpRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });
  const btnRefs = useRef([]);
  const filters = ["All", "UX/UI", "Branding", "Apps"];

  const portfolio = [
    {
      id: 1,
      image: newAge,
      title: "New Age",
      description: "Precision & Information",
      category: "UX/UI",
    },
    {
      id: 2,
      image: Deloitte,
      title: "Deloitte",
      description: "Branding Excellence",
      category: "Branding",
    },
    {
      id: 3,
      image: Mochnix,
      title: "Mochnix",
      description: "Creative Branding",
      category: "Branding",
    },
    {
      id: 4,
      image: Sebastian,
      title: "Sebastian",
      description: "App Development",
      category: "Apps",
    },
  ];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const activeIndex = filters.indexOf(activeFilter);
    if (btnRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = btnRefs.current[activeIndex];
      setBgStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="dark:bg-dark-bg bg-white">
      <div className="overflow-x-hidden overflow-y-hidden pt-[60px] pb-[30px] md:pt-[20px] md:pb-[60px] lg:pt-[100px] lg:pb-20">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col items-center text-center md:mb-[50px]">
            <h2
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
            >
              My Recent Works
            </h2>
            <p
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="text-primary-color-light wow animate__animated animate__fadeInUp dark:text-body-color max-w-[700px]"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>

          <div className="flex items-center">
            <div className="bg-cream-light-color relative z-0 mx-auto inline-flex max-w-[400px] items-center justify-center gap-x-2 rounded-full bg-[#F6F3FC] px-2 py-1 md:py-1.5 dark:bg-black">
              <div
                className="bg-primary-color absolute top-1/2 left-0 h-[80%] rounded-full from-[#8750f7] via-[#2a1454] to-[#8750f7] transition-all duration-300 ease-in-out dark:bg-gradient-to-r"
                style={{
                  ...bgStyle,
                  transform: "translateY(-50%)",
                  backgroundSize: "200%",
                }}
              />

              {filters.map((filter, index) => (
                <button
                  key={filter}
                  ref={(el) => (btnRefs.current[index] = el)}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative z-10 cursor-pointer px-3 py-[10px] text-[15px] leading-1 transition-all duration-300 md:px-[25px] md:py-3 ${
                    activeFilter === filter
                      ? "text-white"
                      : "text-primary-color dark:text-white-color"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[30px] grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 lg:mt-[50px]">
            <AnimatePresence>
              {filteredPortfolio.map((item, idx) => (
                <motion.div
                  key={item.id}
                  // layout
                  // initial={{ opacity: 0, scale: 0.8 }}
                  // animate={{ opacity: 1, scale: 1 }}
                  // exit={{ opacity: 0, scale: 0.8 }}
                  // transition={{ duration: 0.2 }}
                  data-wow-delay={`${idx * 0.2}s`}
                  className="bg-primary-color-light wow animate__animated animate__fadeInUp group relative float-left inline-flex rounded-[10px] px-[15px] pt-[25px] pb-0 lg:p-9 lg:pb-0"
                >
                  <img src={item.image} alt={item.title} />
                  <div className="invisible absolute bottom-[15px] left-0 w-full translate-y-5 px-[15px] opacity-0 transition-all duration-300 group-hover:visible group-hover:bottom-5 group-hover:translate-y-0 group-hover:opacity-100 lg:px-5">
                    <div
                      style={{
                        backgroundSize: "200%",
                      }}
                      className="text-white-color w-full rounded-[15px] bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] p-[15px] pr-[30px] lg:p-5 lg:pr-[50px]"
                    >
                      <span className="mb-2 block text-xl font-bold md:text-[25px] lg:mb-[15px] lg:text-3xl">
                        {item.title}
                      </span>
                      <span className="text-body-color block">
                        {item.description}
                      </span>
                      <MoveUpRight className="text-primary-color group-hover:text-white-color absolute top-1/2 right-8 inline-block h-8 w-8 -translate-y-1/2 rotate-[-360deg] transition-all duration-300 group-hover:rotate-0 lg:right-[55px]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
