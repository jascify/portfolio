import { useState } from "react";

const systemsProjects = [
  {
    title: "3S+ Sense", role: "Project Manager & Full Stack Developer",
    desc: "A cross-platform barangay services app with an AI sentiment analysis — I led the team and built both the front-end and back-end.",
    tech: [
      { label: <><i className="fa-brands fa-js mr-1" style={{color:"#F7DF1E"}}></i>JavaScript</>, cls: "ts-javascript" },
      { label: <><i className="fa-brands fa-react mr-1" style={{color:"#61DAFB"}}></i>React</>, cls: "ts-react" },
      { label: <><i className="fa-brands fa-square-js mr-1" style={{color:"#3178C6"}}></i>TypeScript</>, cls: "ts-typescript" },
      { label: <><i className="fa-solid fa-fire mr-1" style={{color:"#FFCA28"}}></i>Firebase</>, cls: "ts-firebase" },
      { label: <><i className="fa-solid fa-wind mr-1" style={{color:"#38BDF8"}}></i>Tailwind</>, cls: "ts-tailwind" },
      { label: <><i className="fa-solid fa-wind mr-1" style={{color:"#38BDF8"}}></i>NativeWind</>, cls: "ts-nativewind" },
    ],
    links: [{ href: "https://www.3s-sense.site/", icon: "fa-solid fa-link", label: "Live" }],
    img: "/assets/3s.png", caption: "3S+ Sense",
  },
    {
    title: "Quiz-IT", role: "Full Stack Developer",
    desc: "A web-based quiz platform where teachers can create quizzes and students can answer them in real time — built end-to-end with Django and SQLite.",
    tech: [{ label: <><i className="fa-brands fa-python mr-1" style={{color:"#3572A5"}}></i>Django</>, cls: "ts-django" }, { label: <><i className="fa-brands fa-python mr-1" style={{color:"#3572A5"}}></i>Python</>, cls: "ts-python" }, { label: <><i className="fa-solid fa-database mr-1" style={{color:"#0a6ea6"}}></i>SQLite</>, cls: "ts-sqlite" }],
    links: [{ href: "https://github.com/jascify/Quiz-IT", icon: "fa-brands fa-github", label: "Code" }, { href: "https://quiz-it-qyw0.onrender.com/", icon: "fa-solid fa-link", label: "Live" }],
    img: "/assets/quiz-it.png", caption: "Quiz-IT",
  },
  {
    title: "Bask Cafe Website", role: "Frontend Developer",
    desc: "A cafe website with a product menu, gallery, and reservation form. Focused on clean layout and a warm visual identity matching the brand.",
    tech: [{ label: <><i className="fa-brands fa-html5 mr-1" style={{color:"#E34F26"}}></i>HTML</>, cls: "ts-html" }, { label: <><i className="fa-brands fa-css3-alt mr-1" style={{color:"#1572B6"}}></i>CSS</>, cls: "ts-css" }, { label: <><i className="fa-brands fa-php mr-1" style={{color:"#777BB4"}}></i>PHP</>, cls: "ts-php" }],
    links: [{ href: "https://github.com/kerbyllamosocruz/bask-cafe.vercel.app", icon: "fa-brands fa-github", label: "Code" }, { href: "https://bask-cafe.vercel.app", icon: "fa-solid fa-link", label: "Live" }],
    img: "/assets/bask-cafe.png", caption: "Bask Cafe Website",
  },
];

const graphicsProjects = [
  { title: "Vet Pet Record", img: "assets/vet-record.jpg" },
  { title: "Vet Kit", img: "assets/vet-kit.png" },
  { title: "Business Card", img: "assets/vet-card.jpg" },
  { title: "Book Cover", img: "assets/book.png" },
  { title: "Digital Typography", img: "assets/digitaltypography1.png" },
  { title: "Digital Typography", img: "assets/digitaltypography2.jpg" },
  { title: "Punk", img: "assets/punk1.png" },
  { title: "Punk", img: "assets/punk2.png" },
  { title: "Poster", img: "assets/poster.jpg" },
];

const uiProjects = [
  { title: "LinguaLink", desc: "A mobile application concept that gamifies language learning, enabling users to track their progress and unlock educational modules using earned energy points.", embedSrc: "https://embed.figma.com/design/ZoLeqXUzhuVmUEAv6bTTqb/LinguaLink?node-id=0-1&embed-host=share", figmaHref: "https://www.figma.com/design/ZoLeqXUzhuVmUEAv6bTTqb/LinguaLink?node-id=0-1" },
  { title: "Sentimenta", desc: "UI/UX design for a mobile diary app with sentiment analysis .", embedSrc: "https://embed.figma.com/design/bTiwEPWxvAyyNxn0luMMUX/Untitled?node-id=0-1&embed-host=share", figmaHref: "https://www.figma.com/design/bTiwEPWxvAyyNxn0luMMUX/Untitled" },
  { title: "3S+ Sense", desc: "The UI/UX design for the 3S+ Sense barangay services web, focusing on accessibility and ease of use.", embedSrc: "https://embed.figma.com/design/asznjkRnIwxhlZos7Kr7lv/3S--Barangay?node-id=0-1&embed-host=share", figmaHref: "https://www.figma.com/design/asznjkRnIwxhlZos7Kr7lv/3S--Barangay?node-id=0-1" },
  { title: "ValCommuters", desc: "A mobile app design for Valenzuela City commuters, aimed at providing real-time transport information and a better commuting experience.", embedSrc: "https://embed.figma.com/design/4Wn9kyqFRo8xuSUUVxvtLG/Val-Commuters?node-id=12-539&embed-host=share", figmaHref: "https://www.figma.com/design/4Wn9kyqFRo8xuSUUVxvtLG/Val-Commuters?node-id=12-539" },
];

const daProjects = [
  {
    title: "Netflix Data Analysis", img: "/assets/netflix_dashboard.png",
    desc: "Explored Netflix's content library to uncover trends in genres, release patterns, and regional production — visualized in Power BI.",
    tech: [
      { label: <><i className="fa-brands fa-python mr-1" style={{color:"#3572A5"}}></i>Python (Pandas)</>, cls: "ts-python" },
      { label: <><i className="fa-solid fa-book-open mr-1" style={{color:"#F37626"}}></i>Jupyter</>, cls: "ts-jupyter" },
      { label: <><i className="fa-solid fa-chart-column mr-1" style={{color:"#F2C811"}}></i>Power BI</>, cls: "ts-powerbi" },
    ],
    github: "https://github.com/yourname/your-repo",
  },
  {
    title: "Amazon Data Analysis", img: "/assets/amazon_dashboard.png",
    desc: "Analyzed Amazon product and sales data to identify top-performing categories and pricing patterns using Pandas and Power BI.",
    tech: [
      { label: <><i className="fa-brands fa-python mr-1" style={{color:"#3572A5"}}></i>Python (Pandas)</>, cls: "ts-python" },
      { label: <><i className="fa-solid fa-book-open mr-1" style={{color:"#F37626"}}></i>Jupyter</>, cls: "ts-jupyter" },
      { label: <><i className="fa-solid fa-chart-column mr-1" style={{color:"#F2C811"}}></i>Power BI</>, cls: "ts-powerbi" },
    ],
    github: "https://github.com/yourname/your-repo",
  },
];

export default function Projects({ theme, openLightbox }) {
  const [activeTab, setActiveTab] = useState("systems");

  const bg = theme === "light" ? "bg-[#f2f8f2]" : "bg-[#0a0f0b]";
  const bgCard = theme === "light" ? "bg-white" : "bg-[#0f1610]";
  const bgRaised = theme === "light" ? "bg-[#e8f5e9]" : "bg-[#162018]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";
  const border = theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]";
  const borderPrimary = theme === "light" ? "border-[rgba(46,125,50,0.2)]" : "border-[rgba(76,175,80,0.22)]";

  const tabs = [
    { id: "systems", icon: "fa-solid fa-code", label: "Systems" },
    { id: "graphics", icon: "fa-solid fa-image", label: "Graphic Design" },
    { id: "ui", icon: "fa-solid fa-palette", label: "Interfaces" },
  ];

  return (
    <section id="projects" className={`${bg} py-[100px] px-[6%] text-center transition-colors`}>
      <div className="mb-[50px]">
        <p className="text-[#6abf69] uppercase tracking-[2px] font-bold text-[0.85rem] mb-[10px]">Portfolio</p>
        <h2 className={`text-[2.4rem] font-bold ${textDark}`}>Selected Works</h2>
      </div>

      <div className="max-w-[1100px] mx-auto text-left">
        {/* Tabs */}
        <div className="flex gap-1 pl-4 flex-wrap">
          {tabs.map(({ id, icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`px-5 py-[10px] border border-b-0 font-mono text-[0.85rem] rounded-t-[10px] flex items-center gap-2 cursor-pointer transition-all
                ${activeTab === id
                  ? `${bgRaised} text-[#6abf69] ${borderPrimary} font-bold border-t-2 border-t-[#4caf50] -mb-[1px] z-10 relative`
                  : `${bgCard} ${theme === "light" ? "text-[#4a5e4b]" : "text-[#8faa90]"} ${border} hover:text-[#6abf69] hover:bg-[rgba(76,175,80,0.08)]`
                }`}>
              <i className={`${icon} text-[0.9rem]`}></i> {label}
            </button>
          ))}
        </div>

        {/* Folder Content */}
        <div className={`${bgRaised} ${borderPrimary} border rounded-[0_16px_16px_16px] p-9 shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative z-[1]`}>

          {/* Systems Tab */}
          {activeTab === "systems" && (
            <div className="flex flex-col">
              {systemsProjects.map((p) => (
                <div key={p.title}
                  className={`grid grid-cols-1 md:grid-cols-[1fr_420px] gap-7 items-center py-8 px-3 border-b transition-colors hover:bg-[rgba(76,175,80,0.05)] ${border}
                    first:border-t`}>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[0.68rem] font-extrabold uppercase tracking-[1.5px] text-[#6abf69]">{p.role}</span>
                      <h3 className={`text-[1.25rem] font-bold ${textDark}`}>{p.title}</h3>
                    </div>
                    <p className={`text-[0.82rem] leading-[1.6] ${textGray}`}>{p.desc}</p>
                    <div className="flex items-center justify-between gap-3 flex-wrap mt-[6px]">
                      <div className="flex flex-wrap gap-[5px]">
                        {p.tech.map((t, i) => (
                          <span key={i} className={`text-[10px] px-2 py-[3px] rounded-[4px] font-semibold border
                            ${theme === "light" ? "bg-[#e8f5e9] text-[#3d5c3e] border-[rgba(46,125,50,0.12)]" : "bg-[rgba(76,175,80,0.1)] text-[#8faa90] border-[rgba(76,175,80,0.1)]"}`}>
                            {t.label}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {p.links.map((l) => (
                          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                            className={`text-[0.78rem] font-semibold px-3 py-[5px] rounded-[6px] border flex items-center gap-[5px] transition-all
                              hover:bg-[rgba(76,175,80,0.1)] hover:border-[rgba(76,175,80,0.22)] hover:text-[#6abf69]
                              ${theme === "light" ? "text-[#0d1f0e] bg-white border-[rgba(46,125,50,0.12)]" : "text-[#e8f5e9] bg-[#0f1610] border-[rgba(76,175,80,0.1)]"}`}>
                            <i className={l.icon}></i> {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`w-full md:w-[420px] h-[240px] rounded-[10px] overflow-hidden border cursor-pointer relative group ${border}`}
                    onClick={() => openLightbox(p.img, p.caption)}>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-all duration-400 group-hover:scale-[1.06] group-hover:brightness-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-[1.6rem] opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* UI Tab */}
          {activeTab === "ui" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {uiProjects.map((p) => (
                <div key={p.title} className={`${bgCard} rounded-[12px] border overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(46,125,50,0.1)] hover:border-[rgba(76,175,80,0.22)] ${border}`}>
                  <div className="w-full h-[210px] overflow-hidden">
                    <iframe src={p.embedSrc} width="800" height="450" className="w-full h-full border-none" allowFullScreen></iframe>
                  </div>
                  <div className="p-[22px]">
                    <span className="text-[0.7rem] text-[#6abf69] font-extrabold tracking-[1.2px] block mb-2 uppercase">UI/UX // FIGMA</span>
                    <h3 className={`text-[1.3rem] mb-2 ${textDark}`}>{p.title}</h3>
                    <p className={`text-[0.9rem] leading-[1.6] ${textGray}`}>{p.desc}</p>
                    <div className="mt-[18px]">
                      <a href={p.figmaHref} target="_blank" rel="noreferrer"
                        className={`text-[13px] font-semibold flex items-center gap-[5px] transition-colors hover:text-[#6abf69] ${textGray}`}>
                        <i className="fa-brands fa-figma"></i> Open full file
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Graphics Tab */}
          {activeTab === "graphics" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {graphicsProjects.map((p, i) => (
                <div key={i} className={`${bgCard} rounded-[12px] border overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(46,125,50,0.1)] hover:border-[rgba(76,175,80,0.22)] ${border}`}>
                  <div className="w-full h-[210px] relative group cursor-pointer overflow-hidden"
                    onClick={() => openLightbox(p.img, p.title)}>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-[rgba(46,125,50,0.75)] flex items-center justify-center text-white text-[2rem] opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                  </div>
                  <div className="p-[22px]">
                    <span className="text-[0.7rem] text-[#6abf69] font-extrabold tracking-[1.2px] block mb-2 uppercase">GRAPHICS // ADOBE PS</span>
                    <h3 className={`text-[1.3rem] mb-2 ${textDark}`}>{p.title}</h3>
                    <span className={`text-[13px] font-semibold flex items-center gap-[5px] ${textGray}`}>
                      <i className="fa-solid fa-paintbrush"></i> Photoshop
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Data Analysis Strip */}
        <div className={`mt-7 ${bgCard} ${borderPrimary} border rounded-[16px] p-7 transition-colors`}>
          <div className={`flex flex-col gap-[10px] mb-6 pb-[18px] border-b border-dashed ${border}`}>
            <span className="text-[0.72rem] font-extrabold tracking-[1.4px] uppercase text-[#6abf69] bg-[rgba(76,175,80,0.1)] border border-[rgba(76,175,80,0.22)] rounded-full px-[14px] py-1 inline-flex items-center gap-[6px] self-start whitespace-nowrap">
              <i className="fa-solid fa-chart-column"></i> Data Analysis
            </span>
            <p className={`text-[0.88rem] ${textGray}`}>Exploratory data projects using Python, Jupyter, and Power BI.</p>
          </div>

          <div className="flex flex-col gap-6">
            {daProjects.map((p, i) => (
              <div key={p.title}
                className={`${bgCard} ${border} border rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[300px] transition-all hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(46,125,50,0.1)] hover:border-[rgba(76,175,80,0.22)]
                  ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="w-full h-full min-h-[260px] relative overflow-hidden group cursor-pointer"
                  style={{ direction: "ltr" }}
                  onClick={() => openLightbox(p.img, p.title)}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top-left transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-50" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-[1.8rem] opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                </div>
                <div className="p-7 flex flex-col justify-center" style={{ direction: "ltr" }}>
                  <h3 className={`text-[1.15rem] font-bold mb-[6px] ${textDark}`}>{p.title}</h3>
                  <p className={`text-[0.82rem] leading-[1.6] mb-[14px] ${textGray}`}>{p.desc}</p>
                  <div className="flex items-center justify-between flex-wrap gap-3 mt-[14px]">
                    <div className="flex flex-wrap gap-[5px]">
                      {p.tech.map((t, j) => (
                        <span key={j} className={`text-[10px] px-2 py-[3px] rounded-[4px] font-semibold border
                          ${theme === "light" ? "bg-[#e8f5e9] text-[#3d5c3e] border-[rgba(46,125,50,0.12)]" : "bg-[rgba(76,175,80,0.1)] text-[#8faa90] border-[rgba(76,175,80,0.1)]"}`}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className={`text-[0.78rem] font-semibold px-3 py-[5px] rounded-[6px] border flex items-center gap-[5px] transition-all
                        hover:bg-[rgba(76,175,80,0.1)] hover:border-[rgba(76,175,80,0.22)] hover:text-[#6abf69]
                        ${theme === "light" ? "text-[#0d1f0e] bg-white border-[rgba(46,125,50,0.12)]" : "text-[#e8f5e9] bg-[#0f1610] border-[rgba(76,175,80,0.1)]"}`}>
                      <i className="fa-brands fa-github"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}