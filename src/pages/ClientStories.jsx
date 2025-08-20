import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Client1 from "../public/cl1.jpg";
import Client2 from "../public/cl2.jpg";
import Company1 from "../public/cm1.png";
import Company1Dark from "../public/1-dark.png";
import Company2 from "../public/cm2.png";
import Company2Dark from "../public/2-dark.png";

const ClientStories = () => {
  return (
    <section id="testimonials">
      <div className="bg-cream-light-color bg-off-white dark:bg-black-color py-[60px] md:py-20 lg:py-30">
        <div className="container mx-auto">
          <div className="grid gap-6 overflow-x-hidden lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="mb-10 text-center md:mb-[50px] lg:text-start">
                <h2
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl leading-[1.2] font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
                >
                  My Client's Stories
                </h2>
                <p
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  className="text-primary-color-light wow animate__animated animate__fadeInUp dark:text-body-color"
                >
                  Empowering people in new a digital journey with my super
                  services
                </p>
              </div>
            </div>
            <div
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              className="wow animate__animated animate__fadeInRight cursor-grab overflow-hidden lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={true}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <div className="bg-white-color dark:bg-primary-color-light group relative z-0 mb-[50px] rounded-[15px] p-[25px]">
                    <div className="mb-5 flex justify-between gap-[30px]">
                      <div className="max-w-100px w-full">
                        <img src={Company1} className="!hidden dark:!block" />
                        <img
                          src={Company1Dark}
                          className="!block dark:!hidden"
                        />
                      </div>
                      <div className="w-2/5 max-w-[120px]">
                        <img
                          src={Client1}
                          className="rounded-5px w-full rounded-bl-[125px]"
                        />
                      </div>
                    </div>
                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                      <div className="mb-[25px] flex">
                        <svg
                          width={22}
                          height={22}
                          style={{
                            rotate: "-45deg",
                          }}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint6_linear_263_514)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          style={{
                            rotate: "133deg",
                            marginLeft: "-4%",
                          }}
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint7_linear_263_515)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-primary-color-light dark:text-body-color mb-[30px] md:mb-[50px]">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.
                      </p>
                      <h4 className="mb-2 text-lg">Brandon Fraser</h4>
                      <p className="text-primary-color-light dark:text-body-color text-sm">
                        Senior Software Dev, Cosmic Sport
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white-color dark:bg-primary-color-light group relative z-0 rounded-[15px] p-[25px]">
                    <div className="mb-5 flex justify-between gap-[30px]">
                      <div className="max-w-100px w-full">
                        <img src={Company2} className="!hidden dark:!block" />
                        <img
                          src={Company2Dark}
                          className="!block dark:!hidden"
                        />
                      </div>
                      <div className="w-2/5 max-w-[120px]">
                        <img
                          src={Client2}
                          className="rounded-5px w-full rounded-bl-[125px]"
                        />
                      </div>
                    </div>
                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                      <div className="mb-[25px] flex">
                        <svg
                          width={22}
                          height={22}
                          style={{
                            rotate: "-45deg",
                          }}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint6_linear_263_514)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          style={{
                            rotate: "133deg",
                            marginLeft: "-4%",
                          }}
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint7_linear_263_515)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-primary-color-light dark:text-body-color mb-[30px] md:mb-[50px]">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.
                      </p>
                      <h4 className="mb-2 text-lg">Brandon Fraser</h4>
                      <p className="text-primary-color-light dark:text-body-color text-sm">
                        Senior Software Dev, Cosmic Sport
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white-color dark:bg-primary-color-light group relative z-0 rounded-[15px] p-[25px]">
                    <div className="mb-5 flex justify-between gap-[30px]">
                      <div className="max-w-100px w-full">
                        <img src={Company1} className="!hidden dark:!block" />
                        <img
                          src={Company1Dark}
                          className="!block dark:!hidden"
                        />
                      </div>
                      <div className="w-2/5 max-w-[120px]">
                        <img
                          src={Client1}
                          className="rounded-5px w-full rounded-bl-[125px]"
                        />
                      </div>
                    </div>
                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                      <div className="mb-[25px] flex">
                        <svg
                          width={22}
                          height={22}
                          style={{
                            rotate: "-45deg",
                          }}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint6_linear_263_514)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          style={{
                            rotate: "133deg",
                            marginLeft: "-4%",
                          }}
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint7_linear_263_515)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-primary-color-light dark:text-body-color mb-[30px] md:mb-[50px]">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.
                      </p>
                      <h4 className="mb-2 text-lg">Brandon Fraser</h4>
                      <p className="text-primary-color-light dark:text-body-color text-sm">
                        Senior Software Dev, Cosmic Sport
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white-color dark:bg-primary-color-light group relative z-0 rounded-[15px] p-[25px]">
                    <div className="mb-5 flex justify-between gap-[30px]">
                      <div className="max-w-100px w-full">
                        <img src={Company2} className="!hidden dark:!block" />
                        <img
                          src={Company2Dark}
                          className="!block dark:!hidden"
                        />
                      </div>
                      <div className="w-2/5 max-w-[120px]">
                        <img
                          src={Client2}
                          className="rounded-5px w-full rounded-bl-[125px]"
                        />
                      </div>
                    </div>
                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                      <div className="mb-[25px] flex">
                        <svg
                          width={22}
                          height={22}
                          style={{
                            rotate: "-45deg",
                          }}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint6_linear_263_514)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          style={{
                            rotate: "133deg",
                            marginLeft: "-4%",
                          }}
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 transition-all duration-300"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint7_linear_263_515)"
                            className="fill-primary-color"
                          />
                          <defs>
                            <linearGradient
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset={1}
                                stopColor="var(--tj-theme-primary)"
                              />
                              <stop
                                offset={1}
                                stopColor="#140C1C"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-primary-color-light dark:text-body-color mb-[30px] md:mb-[50px]">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.
                      </p>
                      <h4 className="mb-2 text-lg">Brandon Fraser</h4>
                      <p className="text-primary-color-light dark:text-body-color text-sm">
                        Senior Software Dev, Cosmic Sport
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
