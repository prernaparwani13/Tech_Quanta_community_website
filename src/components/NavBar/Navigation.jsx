// src/components/Header.jsx

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Community Work", link: "/community-work" },
    { name: "LeaderBoard", link: "/leaderboard" },
    { name: "About", link: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0f0f0f]/70 backdrop-blur-md shadow-lg">
      <Navbar className="max-w-7xl mx-auto px-6 py-2">
        {/* Desktop Nav */}
        <NavBody>
          <NavLink
            to="/"
            className="z-20 flex items-center space-x-2 text-xl font-bold"
          >
            <img
              src="/logo.jpg"
              alt="TechQuanta Logo"
              width={44}
              height={44}
              className="rounded-full shadow-[0_0_10px_#2ECC71]"
            />
            <span className="text-white font-['Exo_2'] tracking-wide">
              Tech<span className="text-[#00BFFF]">Quanta</span>
            </span>
          </NavLink>

          <NavItems
            items={navItems.map((item) => ({
              ...item,
              isActive: location.pathname === item.link,
            }))}
            className="text-sm font-semibold space-x-6 text-neutral-300"
            itemClassName={({ isActive }) =>
              `transition-all duration-200 hover:text-[#00E6E6] ${
                isActive ? "text-[#2ECC71]" : ""
              }`
            }
          />

          <NavbarButton
            variant="primary"
            className="bg-gradient-to-r from-[#00BFFF] to-[#8E44AD] hover:from-[#8E44AD] hover:to-[#00BFFF] text-white px-5 py-1 rounded-full font-semibold shadow-md transition-all hover:scale-105"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSddiwCoTtyjxuvKq6nPvgE6FXDjlMAz-35X2w8XFqscTDcYuw/viewform?usp=header",
                "_blank"
              )
            }
          >
            Join
          </NavbarButton>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <NavLink to="/" className="flex items-center space-x-2">
                <img
                  src="/logo.jpg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-full shadow-md"
                />
                <span className="text-white font-['Exo_2'] text-lg font-semibold">
                  TechQuanta
                </span>
              </NavLink>
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 text-base font-medium font-['Rajdhani'] rounded transition-colors ${
                  location.pathname === item.link
                    ? "text-[#2ECC71]"
                    : "text-neutral-300 hover:text-[#00E6E6]"
                }`}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-6 flex flex-col gap-3 px-4">
              <NavbarButton
                variant="primary"
                className="bg-gradient-to-r from-[#00BFFF] to-[#8E44AD] text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
                style={{ boxShadow: "0 0 12px #2ECC71" }}
              >
                Join
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}

export default Header;
