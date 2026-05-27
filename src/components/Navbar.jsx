import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1200px] px-6 py-[14px]
        backdrop-blur-xl border rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all
        ${menuOpen ? "rounded-b-none" : ""}
        ${theme === "light"
          ? "bg-white/92 border-[rgba(46,125,50,0.2)]"
          : "bg-[rgba(13,26,15,0.88)] border-[rgba(76,175,80,0.22)]"
        }`}
    >
      <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex md:block items-center gap-4 md:gap-0">
          {/* Mobile Theme Toggle */}
          <button onClick={toggleTheme}
            className={`md:hidden flex items-center justify-center w-8 h-8 rounded-[10px] border text-[13px] font-medium transition-all
              ${theme === "light"
                ? "bg-[#e8f5e9] border-[rgba(46,125,50,0.2)] text-[#3d5c3e]"
                : "bg-[#162018] border-[rgba(76,175,80,0.22)] text-[#8faa90]"
              }`}>
            <i className={`text-[#6abf69] text-[13px] ${theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"}`}></i>
          </button>
          <a href="#home" className="flex flex-col gap-[2px] whitespace-nowrap">
            <span className={`text-[15px] font-bold ${theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]"}`}>
              Jasmine Aguilar
            </span>
            <span className="hidden md:block text-[11px] text-[#6abf69] tracking-[0.5px]">IT Student</span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:block">
          <ul className={`flex gap-1 px-1 py-1 rounded-full border
            ${theme === "light" ? "bg-[rgba(46,125,50,0.05)] border-[rgba(46,125,50,0.07)]" : "bg-[rgba(76,175,80,0.05)] border-[rgba(76,175,80,0.06)]"}`}>
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={label}
                  className={`px-4 py-[6px] rounded-full transition-colors cursor-pointer
                    ${isActive
                      ? "bg-[rgba(76,175,80,0.1)]"
                      : "hover:bg-[rgba(76,175,80,0.1)]"
                    }`}>
                  <a href={href}
                    className={`text-[0.9rem] transition-colors
                      ${isActive
                        ? "text-[#6abf69]"
                        : theme === "light" ? "text-[#3d5c3e] hover:text-[#2e7d32]" : "text-[#8faa90] hover:text-[#6abf69]"
                      }`}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-[10px] justify-end">
          <div className="flex gap-2">
            {[
              { href: "https://linkedin.com/in/jasmine-miel-aguilar", icon: "fa-brands fa-linkedin" },
              { href: "https://github.com/jascify", icon: "fa-brands fa-github" },
              { href: "mailto:aguilar.jasminemiel@gmail.com", icon: "fa-solid fa-envelope" },
            ].map(({ href, icon }) => (
              <a key={icon} href={href} target="_blank" rel="noreferrer"
                className={`w-8 h-8 flex items-center justify-center rounded-[10px] text-[15px] border transition-all hover:-translate-y-0.5
                  bg-[rgba(76,175,80,0.1)] text-[#6abf69] border-[rgba(76,175,80,0.22)]
                  hover:bg-[#4caf50] hover:text-white hover:border-[#4caf50]`}>
                <i className={icon}></i>
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme}
            className={`flex items-center gap-[7px] px-[14px] py-[6px] rounded-[20px] border text-[13px] font-medium transition-all
              hover:bg-[rgba(76,175,80,0.1)] hover:border-[#6abf69] hover:text-[#6abf69]
              ${theme === "light"
                ? "bg-[#e8f5e9] border-[rgba(46,125,50,0.2)] text-[#3d5c3e]"
                : "bg-[#162018] border-[rgba(76,175,80,0.22)] text-[#8faa90]"
              }`}>
            <i className={`text-[#6abf69] text-[13px] ${theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"}`}></i>
            <span className="text-[12px] tracking-[0.3px]">{theme === "light" ? "Light" : "Dark"}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-[20px] px-2 py-[6px] bg-transparent border-none cursor-pointer ml-auto
            ${theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]"}`}>
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className={`md:hidden absolute top-full left-[-1px] w-[calc(100%+2px)] backdrop-blur-xl border-t-0 border rounded-b-[20px] py-5 transition-all
          ${theme === "light"
            ? "bg-white/92 border-[rgba(46,125,50,0.2)]"
            : "bg-[rgba(13,26,15,0.88)] border-[rgba(76,175,80,0.22)]"
          }`}>
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={label} className="w-full text-center">
                  <a href={href} onClick={closeMenu}
                    className={`block py-[10px] transition-colors hover:bg-[rgba(76,175,80,0.1)]
                      ${isActive
                        ? "text-[#6abf69]"
                        : theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]"}`}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}