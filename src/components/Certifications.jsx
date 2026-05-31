const certs = [
  {
    img: "/assets/python-cert.jpg", alt: "Python Essentials",
    title: "Python Essentials 1", issuer: "Cisco Networking Academy | Feb 2026",
    desc: "Learned Python fundamentals, algorithmic thinking, and debugging best practices.",
  },
  {
    img: "/assets/dataanalytics-cert.jpg", alt: "Data Analytics",
    title: "Data Analytics Essentials", issuer: "Cisco Networking Academy | Feb 2026",
    desc: "Gained hands-on experience in the data analytics process, including data transformation, organization, and visualization using Excel, SQL, and Tableau.",
  },
  {
    img: "/assets/datascience-cert.jpg", alt: "Data Science",
    title: "Intro to Data Science", issuer: "Cisco Networking Academy | Jan 2026",
    desc: "Learned the fundamentals of data collection, cleaning, exploratory analysis, and interpretation.",
  },
  {
    img: "/assets/seminar.jpg", alt: "Google I/O",
    title: "Google I/O Extended", issuer: "Google Developer Groups (GDG) Manila | July 2024",
    desc: "Attended tech seminar covering web & mobile technologies, cloud tools, and AI development practices at Accenture Uptown BGC, Taguig.",
  },
];

export default function Certifications({ theme, openLightbox }) {
  const bg = theme === "light" ? "bg-[#f2f8f2]" : "bg-[#0a0f0b]";
  const bgCard = theme === "light" ? "bg-white" : "bg-[#0f1610]";
  const bgRaised = theme === "light" ? "bg-[#e8f5e9]" : "bg-[#162018]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";
  const textLight = theme === "light" ? "text-[#7a9e7b]" : "text-[#4a5e4b]";
  const border = theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]";

  return (
    <section id="certifications" className={`${bg} transition-colors`}>
      <div className="max-w-[1200px] mx-auto px-6 py-[100px]">
        <div className="text-center mb-[50px]">
          <p className="text-[#6abf69] uppercase tracking-[2px] font-bold text-[0.85rem] mb-[10px]">Credentials</p>
          <h2 className={`text-[2.4rem] font-bold ${textDark}`}>Certifications & Involvements</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <div key={c.title}
              className={`${bgCard} rounded-[12px] border overflow-hidden flex flex-col transition-all hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(46,125,50,0.1)] hover:border-[rgba(76,175,80,0.22)] ${border}`}>
              {/* Image */}
              <button
                className={`w-full h-[170px] relative cursor-pointer overflow-hidden ${bgRaised} border-0 p-0 block`}
                onClick={() => openLightbox(c.img, c.title)}>
                <img src={c.img} alt={c.alt} loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-[1.8rem] opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </button>

              {/* Content */}
              <div className="p-[18px] flex flex-col gap-1 flex-grow text-left">
                <h3 className={`text-[1rem] font-bold leading-[1.3] ${textDark}`}>{c.title}</h3>
                <p className={`text-[0.78rem] font-semibold mt-[2px] ${textLight}`}>{c.issuer}</p>
                <p className={`text-[0.83rem] leading-[1.55] mt-2 ${textGray}`}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}