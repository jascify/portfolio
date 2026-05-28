const navLinks = ["Home", "About", "Projects", "Skills", "Certificates", "Contact"];
const socials = [
  { href: "https://linkedin.com/in/jasmine-miel-aguilar", icon: "fa-brands fa-linkedin-in", title: "LinkedIn" },
  { href: "https://github.com/jascify", icon: "fa-brands fa-github", title: "GitHub" },
  { href: "https://facebook.com/jasminemiel03", icon: "fa-brands fa-facebook-f", title: "Facebook" },
  { href: "https://instagram.com/jxsmiel", icon: "fa-brands fa-instagram", title: "Instagram" },
  { href: "mailto:aguilar.jasminemiel@gmail.com", icon: "fa-solid fa-envelope", title: "Email" },
];

export default function Footer({ theme }) {
  const bg = theme === "light" ? "bg-white" : "bg-[#0d1a0f]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";
  const textLight = theme === "light" ? "text-[#7a9e7b]" : "text-[#4a5e4b]";
  const border = theme === "light" ? "border-[rgba(46,125,50,0.2)]" : "border-[rgba(76,175,80,0.22)]";
  const borderSubtle = theme === "light" ? "border-[rgba(46,125,50,0.07)]" : "border-[rgba(76,175,80,0.06)]";

  return (
    <footer className={`${bg} border-t ${border} transition-colors`}>
      <div className="max-w-[1100px] mx-auto px-6 pt-9 pb-0">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr] gap-9 pb-7 border-b ${borderSubtle}`}>
          {/* Logo */}
          <div>
            <a href="#home" className={`text-[1.1rem] font-bold block mb-1 ${textDark}`}>Jasmine Aguilar</a>
            <span className="text-[#6abf69] text-[0.75rem] block mb-[10px] tracking-[0.5px]">IT Student</span>
            <p className={`text-[0.85rem] leading-[1.5] ${textLight}`}>Always onwards — progress and creativity.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className={`text-[0.7rem] font-bold uppercase tracking-[1.5px] mb-[14px] ${textLight}`}>Quick Links</p>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}
                    className={`text-[0.88rem] transition-colors hover:text-[#6abf69] ${textGray}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className={`text-[0.7rem] font-bold uppercase tracking-[1.5px] mb-[14px] ${textLight}`}>Connect</p>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ href, icon, title }) => (
                <a key={title} href={href} target="_blank" rel="noreferrer" title={title}
                  className={`w-[34px] h-[34px] flex items-center justify-center rounded-[8px] text-[0.95rem] border transition-all
                    bg-[rgba(76,175,80,0.1)] text-[#6abf69] border-[rgba(76,175,80,0.22)]
                    hover:bg-[#4caf50] hover:text-white hover:border-[#4caf50] hover:-translate-y-0.5`}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-[18px]">
          <p className={`text-[0.8rem] ${textLight}`}>
            © 2026 <span className="text-[#6abf69]">Jasmine Miel Aguilar</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}