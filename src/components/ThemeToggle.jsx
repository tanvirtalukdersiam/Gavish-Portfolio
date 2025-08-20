import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import React from "react";

const ThemeToggle = ({ onToggle, theme }) => {
  return (
    <div className="fixed top-[40%] right-0 z-10">
      <button
        onClick={onToggle}
        style={{
          backgroundSize: "200%",
        }}
        className="flex translate-x-[60%] cursor-pointer items-center gap-2 rounded-s-full bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] p-2 text-white transition-all duration-300 hover:translate-x-0 hover:bg-[-100%]"
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key={"moon"}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-[18.5px] w-[18.5px]" />
            </motion.div>
          ) : (
            <motion.div
              key={"sun"}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-[18.5px] w-[18.5px]" />
            </motion.div>
          )}
        </AnimatePresence>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeToggle;
