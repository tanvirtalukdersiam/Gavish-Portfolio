import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ProgressButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.getElementById("main");
      if (!mainElement) return;

      const scrollTop = mainElement.scrollTop;
      const scrollHeight = mainElement.scrollHeight - mainElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
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

  const scrollToTop = () => {
    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const circumference = 2 * Math.PI * 46;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      className="fixed right-5 bottom-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full p-[2px]"
      onClick={scrollToTop}
      style={{ backgroundSize: "200%" }}
      whileHover={{ backgroundPosition: "right" }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            transform: "rotate(-90deg)",
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-purple-400/40"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-purple-600 dark:text-purple-400"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset:
                circumference - (scrollProgress / 100) * circumference,
              transition: "stroke-dashoffset 0.3s ease",
            }}
          />
        </svg>
        <ArrowUp className="relative z-10 h-6 w-6 text-purple-400" />
      </div>
    </motion.button>
  );
};

export default ProgressButton;
