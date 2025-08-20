import { MoveDownLeft } from "lucide-react";
import { ArrowDownRight } from "lucide-react";
import { MoveDownRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ServicesSection = () => {
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(document.querySelector("#firstService").offsetHeight);
  }, []);
  const [activeServiceId, setActiveServiceId] = useState("01");
  const services = [
    {
      id: "01",
      title: "Web Development",
      description:
        "Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.",
    },
    {
      id: "02",
      title: "UI/UX Design",
      description:
        "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content  easily.",
    },
    {
      id: "03",
      title: "Content Writing",
      description:
        "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
    },
    {
      id: "04",
      title: "Digital Marketing",
      description:
        "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    },
  ];

  return (
    <section id="services">
      <div className="bg-off-white dark:bg-black-color overflow-x-hidden overflow-y-hidden py-[60px] md:py-[60px] lg:py-[80px]">
        <div className="container mx-auto">
          <div className="md:mb-50px mb-10 flex flex-col items-center text-center">
            <h2
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-[35px] font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
            >
              My Quality Services
            </h2>
            <p
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="text-primary-color-light wow animate__animated animate__fadeInUp dark:text-body-color max-w-[700px]"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
            className="wow animate__animated animate__fadeInUp relative"
          >
            <div
              className="absolute left-0 h-[136px] w-full bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] transition-all duration-500 ease-in-out"
              style={{
                top: `${top}px`,
                height: `${height}px`,
                backgroundSize: "200%",
              }}
            ></div>
            {services.map((service, idx) => (
              <div
                onMouseEnter={(e) => {
                  setTop(e.currentTarget.offsetTop);
                  setHeight(e.currentTarget.offsetHeight);
                  setActiveServiceId(service.id);
                }}
                id={idx === 0 ? "firstService" : ""}
                key={service.id}
                data-wow-delay={`${idx * 0.3}s`}
                className="border-body-color wow animate__animated animate__fadeInUp dark:border-secondary-color group relative z-10 border-b px-[15px] lg:px-[30px]"
              >
                <a className="text-primary-color dark:text-white-color relative flex cursor-pointer flex-wrap items-center gap-[15px] py-5 group-hover:text-white md:flex-nowrap md:gap-5 lg:py-[30px]">
                  <span className="flex w-full flex-wrap items-center gap-[10px] text-xl md:w-[calc(40%-10px)] md:gap-5 lg:flex-nowrap">
                    <b
                      className={`transition-all duration-300 ${
                        activeServiceId === service.id
                          ? "text-white"
                          : "text-primary-color group-hover:text-white"
                      }`}
                    >
                      {service.id}
                    </b>
                    <b
                      className={`text-xl md:text-[25px] lg:text-3xl ${
                        activeServiceId === service.id
                          ? "text-white"
                          : "text-primary-color group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </b>
                  </span>
                  <span
                    className={`text-primary-color-light dark:text-body-color w-full group-hover:text-white md:w-[calc(45%-10px)] ${
                      activeServiceId === service.id
                        ? "text-white"
                        : "text-primary-color-light dark:text-body-color group-hover:text-white"
                    }`}
                  >
                    {service.description}
                  </span>
                  <MoveDownRight className="text-primary-color group-hover:text-white-color absolute top-[10%] right-2 h-[35px] w-[35px] transition-all duration-300 group-hover:-rotate-90 md:top-[20%] md:right-5 md:h-[45px] md:w-[45px] md:text-xl lg:right-[35px]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
