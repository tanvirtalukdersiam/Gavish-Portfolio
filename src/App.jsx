import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./pages/HeroSection";
import ServicesSection from "./pages/ServicesSection";
import PortfolioSection from "./pages/PortfolioSection";
import ResumeSection from "./pages/ResumeSection";
import SkillsSection from "./pages/SkillsSection";
import ClientStories from "./pages/ClientStories";
import BlogsSection from "./pages/BlogsSection";
import ContactSection from "./pages/ContactSection";
import FooterSection from "./pages/FooterSection";
import Header from "./components/Header";
import StickyHeader from "./components/StickyHeader";
import ProgressButton from "./components/ProgressButton";
import WOW from "wow.js";
import "animate.css";
import WhatsappIcon from "./components/WhatsappIcon";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  //css problem solve
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: "#main",
    });
    wow.init();
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      id="main"
      className="bg-main-bg max-h-[100dvh] min-h-[100dvh] overflow-x-hidden overflow-y-auto"
    >
      <StickyHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {/* <ProgressButton /> */}
      <WhatsappIcon />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <HeroSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ServicesSection />
      <PortfolioSection />
      <ResumeSection />
      <SkillsSection />
      <ClientStories />
      {/* <BlogsSection /> */}
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
