// src/components/Header.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "Community Work", link: "/community-work" },
    { name: "LeaderBoard", link: "/leaderboard" },
    { name: "About", link: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="TechQuanta Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="font-extrabold text-xl font-['Exo_2'] tracking-wider">
            Tech<span className="text-[#64ffda]">Quanta</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-['Rajdhani']">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-[#64ffda] before:transition-all duration-300 hover:before:w-full ${
                  isActive ? "text-[#64ffda]" : "hover:text-[#64ffda]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Join Button */}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSddiwCoTtyjxuvKq6nPvgE6FXDjlMAz-35X2w8XFqscTDcYuw/viewform?usp=header",
                "_blank"
              )
            }
            className="ml-4 bg-gradient-to-r from-[#64ffda] to-[#3A6073] text-[#0A192F] font-bold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Join
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0F213E] px-6 pb-4 pt-2 text-white font-['Rajdhani']">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `block py-2 border-b border-[#1e3550] ${
                  isActive ? "text-[#64ffda]" : "hover:text-[#64ffda]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsMobileOpen(false);
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSddiwCoTtyjxuvKq6nPvgE6FXDjlMAz-35X2w8XFqscTDcYuw/viewform?usp=header",
                "_blank"
              );
            }}
            className="w-full mt-4 bg-gradient-to-r from-[#64ffda] to-[#3A6073] text-[#0A192F] font-bold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            Join
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
