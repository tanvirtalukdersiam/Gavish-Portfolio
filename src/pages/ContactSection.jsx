import { MailIcon } from "lucide-react";
import { Map } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MapPinHouse } from "lucide-react";
import { LocateIcon } from "lucide-react";
import { Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="bg-off-white dark:bg-black-color py-[60px] md:py-20 lg:py-[100px] xl:py-30">
        <div className="container mx-auto">
          <div
            style={{
              direction: "rtl",
            }}
            className="flex flex-col-reverse gap-x-6 gap-y-10 md:grid md:grid-cols-12 md:items-center"
          >
            <div
              style={{
                direction: "ltr",
              }}
              className="md:col-span-7 md:col-start-1 lg:col-span-6"
            >
              <div>
                <form
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  className="wow animate__animated animate__fadeInRight contact bg-white-color dark:bg-primary-color-light rounded-[15px] px-[15px] py-[30px] md:px-5 lg:px-[30px] lg:py-10 xl:px-10"
                >
                  <div className="mb-[25px] text-center">
                    <h2 className="mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]">
                      Let’s work together!
                    </h2>
                    <p className="text-primary-color-light dark:text-body-color">
                      I design and code beautifully simple things and i love
                      what i do. Just simple like that!
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2">
                    <div>
                      <input
                        placeholder="First name"
                        className="dark:text-white-color text-black-color border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color placeholder:text-gray-color-2 w-full rounded-lg border px-5 py-[14px] leading-1 transition-all duration-300 outline-none focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Last name"
                        className="dark:text-white-color text-black-color border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color placeholder:text-gray-color-2 w-full rounded-lg border px-5 py-[14px] leading-1 transition-all duration-300 outline-none focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Email address"
                        className="dark:text-white-color text-black-color border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color placeholder:text-gray-color-2 w-full rounded-lg border px-5 py-[14px] leading-1 transition-all duration-300 outline-none focus:outline-none"
                        type="email"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Phone number"
                        className="dark:text-white-color text-black-color border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color placeholder:text-gray-color-2 w-full rounded-lg border px-5 py-[14px] leading-1 transition-all duration-300 outline-none focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div className="form_group sm:col-span-2 sm:col-start-1">
                      <select
                        name="conService"
                        id="conService"
                        className="dark:text-gray-color-2 border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color placeholder:text-gray-color-2 w-full rounded-lg border px-5 py-[14px] leading-1 transition-all duration-300 outline-none focus:outline-none"
                      >
                        <option disabled="">Choose Service</option>
                        <option>Branding Design</option>
                        <option>Web Design</option>
                        <option>UI/UX Design</option>
                        <option>App Design</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2 sm:col-start-1">
                      <textarea
                        cols={1}
                        rows={20}
                        placeholder="Message"
                        className="text-white-color border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color placeholder:text-gray-color-2 w-full rounded-lg border px-5 py-[20px] leading-1 transition-all duration-300 outline-none focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2 sm:col-start-1">
                      <button
                        type="submit"
                        className="submit-btn text-white-color cursor-pointer rounded-full bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] px-[35px] py-[17px] text-[15px] leading-1 font-bold capitalize transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              style={{
                direction: "ltr",
              }}
              data-wow-delay="0.3s"
              data-wow-duration="1.5s"
              className="wow animate__animated animate__fadeInLeft md:col-span-5 md:col-start-8"
            >
              <div className="contact-info-list">
                <ul className="flex flex-col gap-y-5">
                  <li className="relative flex flex-col items-center justify-center gap-[25px] rounded-2xl bg-[#140C1C] p-4">
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(161deg, rgb(42, 20, 84), rgb(135, 80, 247))",
                      }}
                      className="text-white-color flex h-[50px] w-[50px] flex-shrink-0 flex-col items-center justify-center rounded-full text-xl leading-1"
                    >
                      <MailIcon className="mt-1 leading-1" />
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mx-auto mb-1 w-max">
                        Email
                      </p>
                      <a
                        href="mailto:tanvir62003@gmail.com"
                        className="text-primary-color-light dark:text-white-color hover:text-primary-color text-lg font-medium lg:text-xl"
                      >
                        gario@gmail.com
                      </a>
                    </div>
                    <button className="text-primary-color-light dark:text-white-color hover:text-primary-color mt-[-10px] flex items-center justify-center text-lg font-medium lg:text-xl">
                      Write Me <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </li>
                  <li className="relative flex flex-col items-center justify-center gap-[25px] rounded-2xl bg-[#140C1C] p-4">
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(161deg, rgb(42, 20, 84), rgb(135, 80, 247))",
                      }}
                      className="text-white-color flex h-[50px] w-[50px] flex-shrink-0 flex-col items-center justify-center rounded-full text-xl leading-1"
                    >
                      <Phone className="mt-1 leading-1" />
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mx-auto mb-1 w-max">
                        WhatsApp
                      </p>
                      <a
                        href="tel:01743860970"
                        className="text-primary-color-light dark:text-white-color hover:text-primary-color text-lg font-medium lg:text-xl"
                      >
                        +143980764
                      </a>
                    </div>
                    <button className="text-primary-color-light dark:text-white-color hover:text-primary-color mt-[-10px] flex items-center justify-center text-lg font-medium lg:text-xl">
                      Write Me <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </li>
                  <li className="relative flex flex-col items-center justify-center gap-[25px] rounded-2xl bg-[#140C1C] p-4">
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(161deg, rgb(42, 20, 84), rgb(135, 80, 247))",
                      }}
                      className="text-white-color flex h-[50px] w-[50px] flex-shrink-0 flex-col items-center justify-center rounded-full text-xl leading-1"
                    >
                      <MessageCircle className="mt-1 leading-1" />
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mx-auto mb-1 w-max">
                        Messenger
                      </p>
                      <a
                        href="#"
                        className="text-primary-color-light dark:text-white-color hover:text-primary-color text-lg font-medium lg:text-xl"
                      >
                        Davis Gario
                      </a>
                    </div>
                    <button className="text-primary-color-light dark:text-white-color hover:text-primary-color mt-[-10px] flex items-center justify-center text-lg font-medium lg:text-xl">
                      Write Me <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
