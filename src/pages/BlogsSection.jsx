import React from "react";
import Blog1 from "../public/blog1.jpg";
import Blog2 from "../public/blog2.jpg";
import Blog3 from "../public/blog3.jpg";
const BlogsSection = () => {
  const blogData = [
    {
      id: 1,
      title: "The Role of Technology in Modern...",
      category: "Business",
      date: "Oct 01, 2022",
      imgSrc: Blog1,
    },
    {
      id: 2,
      title: "The Future of Web Development",
      category: "Development",
      date: "Nov 01, 2022",
      imgSrc: Blog2,
    },
    {
      id: 3,
      title: "Digital Marketo to Their New Off...",
      category: "Portfolio",
      date: "Dec 01, 2022",
      imgSrc: Blog3,
    },
  ];
  return (
    <section>
      <div className="dark:bg-dark-bg bg-white py-[60px] md:py-20 lg:py-[100px] xl:py-30">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col items-center text-center md:mb-[50px]">
            <h2
              data-wow-duration="1.5s"
              className="wow animate__animated animate__fadeInUp mb-[15px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-bold text-transparent md:text-[35px] lg:text-[40px] xl:text-[45px] xl:leading-[1.2] dark:bg-[linear-gradient(90deg,#8750f7_0%,#fff_100%)]"
            >
              Recent Blogs
            </h2>
            <p
              data-wow-duration="1.5s"
              className="text-primary-color-light wow animate__animated animate__fadeInUp dark:text-body-color max-w-[700px]"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 2xl:gap-[35px]">
            {blogData.map((blog, idx) => (
              <div
                key={blog.id}
                data-wow-duration="1.5s"
                className="wow animate__animated animate__fadeInUp group relative flex flex-col items-center"
                data-wow-delay={`${idx * 0.2}s`}
              >
                <div className="relative w-full max-w-[400px] overflow-hidden rounded-[10px]">
                  <a className="overflow-hidden rounded-[10px]">
                    <img
                      className="transition-all duration-500 group-hover:scale-110"
                      src={blog.imgSrc}
                    />
                  </a>
                  <a
                    style={{
                      background:
                        "linear-gradient(90deg,#8750f7,#2a1454 110.61%)",
                    }}
                    className="text-white-color blog-cat absolute top-[15px] left-[15px] cursor-pointer rounded-[50px] px-[10px] py-[7px] text-[13px] leading-[1.1] uppercase transition-all duration-150"
                  >
                    {blog.category}
                  </a>
                  <div className="absolute bottom-5 left-0 w-full px-[10px] transition-all duration-500 lg:px-5">
                    <div className="bg-white-color dark:bg-secondary-color blog-data-card relative z-0 w-full cursor-pointer rounded-[15px] p-[15px] pb-5 after:absolute after:top-0 after:left-0 after:z-1 after:h-full after:w-full after:rounded-[15px] after:opacity-0 after:transition-all after:duration-500 group-hover:after:opacity-100">
                      <div className="relative z-10">
                        <ul className="mb-2 flex items-center gap-5">
                          <li className="text-primary-color group-hover:text-white-color text-sm font-medium transition-all duration-500">
                            <i className="fa-light fa-calendar-days mr-0.5" />{" "}
                            {blog.date}
                          </li>
                          <li className="text-primary-color group-hover:text-white-color text-sm font-medium transition-all duration-500">
                            <i className="fa-light fa-comments mr-0.5" />{" "}
                            <a
                              className="text-primary-color group-hover:text-white-color transition-all duration-500"
                              href="#"
                            >
                              Comment
                            </a>
                          </li>
                        </ul>
                        <a className="text-primary-color-light dark:text-white-color group-hover:text-white-color w-full capitalize">
                          <span className="md:text-size-22 block text-lg font-bold">
                            {blog.title}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
