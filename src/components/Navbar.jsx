import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondButton from "./SecondButton";
import { Sun, Moon, Menu, X } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <header className="bg-bgMain relative">
      <nav className="w-full px-4 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-title text-2xl md:text-4xl font-medium flex-shrink-0">
          Medi<span className="text-primary font-bold">Talk</span>
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-body text-lg font-medium">
          {["Home", "Find Doctor", "About us", "Our services", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="hover:text-primary cursor-pointer transition-colors duration-300"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Theme button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-10 h-10 bg-bgSoft rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} color="white"/>
            )}
          </button>

          {/* Burger button (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary transition hover:bg-primary hover:text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-4">
            <SecondButton>Log in</SecondButton>
            <PrimaryButton>Sign up</PrimaryButton>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bgMain px-6 py-6 space-y-6 shadow-lg">
          {["Home", "Find Doctor", "About us", "Our services", "Contact"].map(
            (item) => (
              <p
                key={item}
                className="text-body text-lg font-medium hover:text-primary transition cursor-pointer"
              >
                {item}
              </p>
            )
          )}

          <div className="flex flex-col gap-4 pt-4">
            <SecondButton>Log in</SecondButton>
            <PrimaryButton>Sign up</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
