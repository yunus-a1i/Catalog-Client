import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { Link } from "react-router";

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const navLinks =[
    {name: "Home", path: "/"},
    {name: "Categories", path: "/categories"},
    {name: "Collections", path: "/collections"},
    {name: "FAQS", path: "/faqs"},
    {name: "Contact", path: "/contact"},
  ]
  return (
    <div>
      <header className="border-b border-border dark:border-darkBorder">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <span className="font-GtSuper italic text-4xl font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                RS
              </span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(
                (item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    // whileHover={{ scale: 1.05 }}
                    className="font-Manrope text-xl tracking-tight text-subHeading dark:text-darkSubHeading hover:text-mainHeading dark:text-darkMainHeading dark:hover:text-darkMainHeading transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Theme Toggle & Search */}
            <div className="flex font-Manrope items-center space-x-4">
              {/* <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-card dark:bg-darkCard border border-border dark:border-darkBorder hover:shadow-lg transition-all"
              >
                {isDark ? "Dark" : "Light"}
              </button> */}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-card dark:bg-darkCard border border-border dark:border-darkBorder px-4 py-2 rounded-full font-Manrope hover:shadow-lg transition-all"
              >
                <span className="text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                  Join
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
