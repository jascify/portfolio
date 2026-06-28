const tiles = [
  {
    type: "wide",
    href: "mailto:aguilar.jasminemiel@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "Email", value: "aguilar.jasminemiel@gmail.com",
    arrow: "Send a message", bgClass: "primary",
  },
  {
    type: "square",
    href: "tel:+639692709375",
    icon: "fa-solid fa-phone",
    label: "Phone", value: "+63 969 270 9375",
    bgClass: "dark",
  },
  {
    type: "square",
    href: null,
    icon: "fa-solid fa-location-dot",
    label: "Location", value: "Valenzuela City, PH",
    bgClass: "dark",
  },
  {
    type: "square",
    href: "https://linkedin.com/in/jasmine-miel-aguilar",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn", value: "jasmine-miel-aguilar",
    arrow: true, bgClass: "raised",
  },
  {
    type: "square",
    href: "https://github.com/jascify",
    icon: "fa-brands fa-github",
    label: "GitHub", value: "jascify",
    arrow: true, bgClass: "raised",
  },
  {
    type: "square",
    href: "https://facebook.com/jasminemiel03",
    icon: "fa-brands fa-facebook-f",
    label: "Facebook", value: "jasminemiel03",
    arrow: true, bgClass: "raised",
  },
  {
    type: "square",
    href: "https://instagram.com/jxsmiel",
    icon: "fa-brands fa-instagram",
    label: "Instagram", value: "@jxsmiel",
    arrow: true, bgClass: "raised",
  },
];

export default function Contact({ theme }) {
  const bg = theme === "light" ? "bg-[#f2f8f2]" : "bg-[#0a0f0b]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";

  const getTileClasses = (bgClass) => {
    if (bgClass === "primary") return "bg-gradient-to-br from-[#4caf50] to-[#388e3c] text-white hover:shadow-[0_12px_36px_rgba(76,175,80,0.35)]";
    if (bgClass === "dark") return `${theme === "light" ? "bg-[#e8f5e9] border-[rgba(46,125,50,0.12)]" : "bg-[#162018] border-[rgba(76,175,80,0.1)]"} border hover:border-[rgba(76,175,80,0.22)]`;
    if (bgClass === "raised") return `${theme === "light" ? "bg-white border-[rgba(46,125,50,0.12)]" : "bg-[#0f1610] border-[rgba(76,175,80,0.1)]"} border hover:border-[rgba(76,175,80,0.22)]`;
    return "";
  };

  const getIconBg = (bgClass) =>
    bgClass === "primary"
      ? "bg-white/20 text-white"
      : "bg-[rgba(76,175,80,0.1)] border border-[rgba(76,175,80,0.22)] text-[#6abf69]";

  const getLabelClass = (bgClass) =>
    bgClass === "primary" ? "text-white/65" : theme === "light" ? "text-[#7a9e7b]" : "text-[#4a5e4b]";

  const getValueClass = (bgClass) =>
    bgClass === "primary" ? "text-white" : textDark;

  const getArrowClass = (bgClass) =>
    bgClass === "primary" ? "text-white" : "text-[#6abf69]";

  return (
    <section id="contact" className={`${bg} pt-[60px] pb-[80px] px-[6%] transition-colors`}>
      <div className="max-w-[960px] mx-auto">
        <div className="mb-[36px]">
          <p className="text-[#6abf69] uppercase tracking-[2px] font-bold text-[0.85rem] mb-2">Get in Touch</p>
          <h2 className={`text-[2.4rem] font-bold mb-2 ${textDark}`}>Let's Connect</h2>
          <p className={`text-[1rem] ${textGray}`}>Open for collaborations, projects, and future opportunities — reach out anytime.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {tiles.map((tile, i) => {
            const Tag = tile.href ? "a" : "div";
            const props = tile.href ? { href: tile.href, target: tile.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {};
            return (
              <Tag key={i} {...props}
                className={`${tile.type === "wide" ? "col-span-2" : "col-span-1"} relative flex flex-col justify-between overflow-hidden no-underline rounded-[12px] p-[22px_24px] min-h-[130px] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)] cursor-pointer
                  ${getTileClasses(tile.bgClass)}`}>
                {tile.bgClass === "primary" && (
                  <i className="fa-solid fa-envelope absolute -right-[14px] -bottom-[18px] text-[100px] opacity-[0.07] pointer-events-none text-white"></i>
                )}
                <div className={`w-[42px] h-[42px] flex items-center justify-center rounded-[10px] text-[1.15rem] mb-3 flex-shrink-0 ${getIconBg(tile.bgClass)}`}>
                  <i className={tile.icon}></i>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <span className={`text-[0.68rem] font-bold uppercase tracking-[1.2px] ${getLabelClass(tile.bgClass)}`}>{tile.label}</span>
                  <span className={`text-[1rem] font-semibold leading-[1.3] break-all ${getValueClass(tile.bgClass)}`}>{tile.value}</span>
                </div>
                {tile.arrow && (
                  <span className={`text-[0.7rem] mt-auto pt-[10px] opacity-50 hover:opacity-100 transition-opacity ${getArrowClass(tile.bgClass)}`}>
                    {typeof tile.arrow === "string"
                      ? <><i className="fa-solid fa-arrow-right mr-1"></i> {tile.arrow}</>
                      : <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    }
                  </span>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}