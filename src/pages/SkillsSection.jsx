import React from "react";
import Figma from "../public/figma.png";
import Sketch from "../public/sketch.png";
import XD from "../public/xd.png";
import WordPress from "../public/wp.png";
import ReactImage from "../public/react.png";
import JavaScript from "../public/js.png";
import HTML from "../public/icons8-html-5-640.png";
import CSS from "../public/icons8-css-logo-640.png";
import Bootstrap from "../public/icons8-bootstrap-logo-640.png";
import TailwindCSS from "../public/icons8-tailwindcss-640.png";
import ReactNative from "../public/icons8-react-native-640.png";
import NodeJS from "../public/icons8-node-js-640.png";
import MongoDB from "../public/mongo.webp";
import NextJS from "../public/icons8-next.js-640.png";
const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      image: HTML,
      percentage: 98,
    },
    {
      id: 2,
      name: "CSS",
      image: CSS,
      percentage: 96,
    },
    {
      id: 3,
      name: "Bootstrap",
      image: Bootstrap,
      percentage: 90,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      image: TailwindCSS,
      percentage: 95,
    },
    {
      id: 5,
      name: "JavaScript",
      image: JavaScript,
      percentage: 93,
    },
    {
      id: 6,
      name: "React",
      image: ReactImage,
      percentage: 89,
    },
    {
      id: 7,
      name: "Next.js",
      image: NextJS,
      percentage: 85,
    },
    {
      id: 8,
      name: "React Native",
      image: ReactNative,
      percentage: 87,
    },
    {
      id: 9,
      name: "Node.js",
      image: NodeJS,
      percentage: 88,
    },
    {
      id: 10,
      name: "MongoDB",
      image: MongoDB,
      percentage: 91,
    },
    {
      id: 11,
      name: "WordPress",
      image: WordPress,
      percentage: 99,
    },
    {
      id: 12,
      name: "Figma",
      image: Figma,
      percentage: 92,
    },
    // {
    //   id: 13,
    //   name: "Sketch",
    //   image: Sketch,
    //   percentage: 80,
    // },
    // {
    //   id: 14,
    //   name: "XD",
    //   image: XD,
    //   percentage: 85,
    // },
  ];

  return (
    <section id="skills">
      <div className="dark:bg-dark-bg bg-white pt-[60px] pb-[60px] md:pt-20 md:pb-[60px] lg:pt-[100px] lg:pb-20">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col items-center text-center md:mb-[50px]">
            <h2
              data-wow-duration="1.5s"
              className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
            >
              My Skills
            </h2>

            <p
              data-wow-duration="1.5s"
              className="text-primary-color-light dark:text-body-color wow animate__animated animate__fadeInUp max-w-[700px]"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div className="skills">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-[30px]">
              {/* html,css,bootstrap,tailwindcss,mongodb,nodejs,nextjs,reactnative */}
              {skills.map((skill, idx) => (
                <div
                  key={skill.id}
                  className="group wow animate__animated animate__fadeInUp w-full max-w-[180px]"
                  data-wow-delay={`${idx * 0.1}s`}
                >
                  <div className="bg-cream-light-color bg-off-white dark:bg-primary-color-light group-hover:border-primary-color group-hover:bg-secondary-color mb-[15px] flex flex-col items-center rounded-[25px] border border-transparent px-[15px] py-[25px] transition-all duration-500 md:pt-[30px] 2xl:mb-[30px] 2xl:pt-10">
                    <div className="mx-9 mb-5 flex w-[60px] flex-col items-center justify-center md:mb-[30px] 2xl:mx-[44px]">
                      <img
                        src={skill.image}
                        className="w-[60px] grayscale-[90%] transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="text-gray-color-2 group-hover:text-primary-color text-xl font-extrabold transition-none duration-300">
                      {skill.percentage}%
                    </div>
                  </div>
                  <p className="text-primary-color text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
