import { useEffect, useState } from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExpertiseSection from "./sections/ExpertiseSection ";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import TestimonialSection from "./sections/TestimonialSection";
import Footer from "./sections/Footer";

function App() {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useState(getSystemTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  // 👇 Listen for system theme changes in real time
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ExpertiseSection />
      {/* <TestimonialSection /> */}
      <ContactSection />
      <Footer/>
    </>
  );
}

export default App;
