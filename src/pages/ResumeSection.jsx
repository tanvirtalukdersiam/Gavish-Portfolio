import { Award } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Badge } from "lucide-react";
import React from "react";

const ResumeSection = () => {
  const experiences = [
    {
      id: 1,
      year: "2022 - Present",
      title: "Programming course",
      institute: "Blockdots, London",
    },
    {
      id: 2,
      year: "2021 - 2022",
      title: "CMS course",
      institute: "Parsons, The New School",
    },
    {
      id: 3,
      year: "2020 - 2021",
      title: "Web design course",
      institute: "House of Life, Leeds",
    },
    {
      id: 4,
      year: "2018 - 2020",
      title: "Parsons, The New School",
      institute: "Theme Junction, Bursa",
    },
  ];
  const education = [
    {
      id: 1,
      year: "2020 - 2023",
      title: "BLOCKDOTS",
      institute: "Harvard University",
    },
    {
      id: 2,
      year: "2016 - 2020",
      title: "Parsons, The New School",
      institute: "University of Denmark",
    },
    {
      id: 3,
      year: "2012 - 2015",
      title: "IDEO",
      institute: "University of California",
    },
    {
      id: 4,
      year: "2010 - 2011",
      title: "Parsons, The New School",
      institute: "Parsons, The New School",
    },
  ];

  return (
    <section id="resume">
      <div className="bg-cream-light-color dark:bg-black-color bg-off-white py-[60px] md:py-20 lg:py-30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 justify-between gap-[30px] gap-y-[50px] md:grid-cols-2">
            <div>
              <div className="mb-10 md:mb-[50px]">
                <h2
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
                >
                  <Award className="mr-2 inline-block h-10 w-10 text-[#9362F8]" />{" "}
                  My Experience
                </h2>
              </div>
              <div className="flex flex-col gap-[30px]">
                {experiences.map((experience, idx) => (
                  <div
                    key={experience.id}
                    className="bg-white-color wow animate__animated animate__fadeInUp dark:bg-primary-color-light exp-card group relative z-0 max-w-[536px] cursor-pointer rounded-[20px] px-[15px] py-5 transition-all duration-500 after:absolute after:top-0 after:left-0 after:z-1 after:h-full after:w-full after:rounded-[20px] after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100 md:px-[30px]"
                    data-wow-delay={`${idx * 0.2}s`}
                  >
                    <div className="text-primary-color-light group-hover:text-white-color dark:text-white-color relative z-10 transition-all duration-300">
                      <p className="text-primary-color text-size-15 mb-2 font-extrabold transition-all duration-300 group-hover:text-white lg:text-xl">
                        {experience.year}
                      </p>
                      <h4 className="lg:text-size-23 2xl:text-size-25 mb-2 text-lg font-bold uppercase md:text-xl">
                        {experience.title}
                      </h4>
                      <p className="text-primary-color-light dark:text-body-color group-hover:text-white-color transition-all duration-300">
                        {experience.institute}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[536px] place-self-end">
              <div className="mb-10 md:mb-[50px]">
                <h2
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
                >
                  <GraduationCap className="mr-2 inline-block h-10 w-10 text-[#9362F8]" />{" "}
                  My Education
                </h2>
              </div>
              <div className="flex flex-col gap-[30px]">
                {education.map((education, idx) => (
                  <div
                    key={education.id}
                    className="bg-white-color wow animate__animated animate__fadeInUp dark:bg-primary-color-light exp-card group relative z-0 max-w-[536px] cursor-pointer rounded-[20px] px-[15px] py-5 transition-all duration-500 after:absolute after:top-0 after:left-0 after:z-1 after:h-full after:w-full after:rounded-[20px] after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100 md:px-[30px]"
                    data-wow-delay={`${idx * 0.2}s`}
                  >
                    <div className="text-primary-color-light group-hover:text-white-color dark:text-white-color relative z-10 transition-all duration-300">
                      <p className="text-primary-color text-size-15 mb-2 font-extrabold transition-all duration-300 group-hover:text-white lg:text-xl">
                        {education.year}
                      </p>
                      <h4 className="lg:text-size-23 2xl:text-size-25 mb-2 text-lg font-bold uppercase md:text-xl">
                        {education.title}
                      </h4>
                      <p className="text-primary-color-light dark:text-body-color group-hover:text-white-color transition-all duration-300">
                        {education.institute}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
