export default function Hero({ theme }) {
  const card = theme === "light" ? "bg-white border-[rgba(46,125,50,0.12)]" : "bg-[#0f1610] border-[rgba(76,175,80,0.1)]";
  const header = theme === "light" ? "bg-[#e8f5e9]" : "bg-[#162018]";
  const footer = theme === "light" ? "bg-[#e8f5e9]" : "bg-[#162018]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-[6%] pt-[120px] pb-[60px] relative overflow-hidden transition-colors
      ${theme === "light" ? "bg-[#f2f8f2]" : "bg-[#0a0f0b]"}`}>
      <div className="absolute -top-[150px] -right-[150px] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(76,175,80,0.07) 0%, transparent 70%)" }} />

      <div className="w-full max-w-[800px]">
        <div className={`rounded-[20px] border shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all hover:-translate-y-[5px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[rgba(76,175,80,0.22)] ${card}`}>

          {/* Card Header */}
          <div className={`${header} px-7 py-4 flex justify-between items-center border-b ${theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]"}`}>
            <span className={`text-[0.85rem] font-bold uppercase tracking-[2px] flex items-center gap-2 ${textDark}`}>
              <i className="fa-solid fa-id-badge text-[#6abf69]"></i> Portfolio ID
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]"></span>
              <span className="w-2 h-2 rounded-full bg-[#febc2e]"></span>
              <span className="w-2 h-2 rounded-full bg-[#28c840]"></span>
            </span>
          </div>

          {/* Card Body */}
          <div className="flex p-9 gap-10 items-center justify-center flex-wrap md:flex-nowrap md:justify-start">
            <div className="flex-shrink-0">
              <img src="/assets/hero-pic.jpg" alt="Jasmine Miel Aguilar"
                className={`w-[200px] h-[250px] object-cover rounded-[12px] border-2 shadow-[8px_8px_0_rgba(76,175,80,0.1)]
                  ${theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]"}`} />
            </div>

            <div className="flex-grow">
              {/* Name */}
              <div className="mb-[18px]">
                <label className="text-[0.65rem] text-[#6abf69] uppercase tracking-[1.5px] font-bold block mb-1">Name</label>
                <h1 className={`text-[2.2rem] font-extrabold leading-[1.1] ${textDark}`}>Jasmine Miel Aguilar</h1>
              </div>

              {/* Role */}
              <div className="mb-[18px]">
                <label className="text-[0.65rem] text-[#6abf69] uppercase tracking-[1.5px] font-bold block mb-1">Role</label>
                <h2 className={`text-[1rem] font-medium ${textDark}`}>
                  Web & Mobile Developer  <span className="text-[#6abf69] mx-1">/</span> Data Analyst <span className="text-[#6abf69] mx-1">/</span> QA Tester
                </h2>
              </div>

              {/* Info Grid */}
              <div className={`grid grid-cols-2 gap-4 my-5 py-4 border-t border-b border-dashed
                ${theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]"}`}>
                <div>
                  <label className="text-[0.65rem] text-[#6abf69] uppercase tracking-[1.5px] font-bold block mb-1">Location</label>
                  <p className={`text-[0.75rem] md:text-[0.9rem] font-medium flex items-center gap-[6px] ${textDark}`}>
                    <i className="fa-solid fa-location-dot text-[#4a5e4b] text-[0.8rem]"></i> Valenzuela City, PH
                  </p>
                </div>
                <div>
                  <label className="text-[0.65rem] text-[#6abf69] uppercase tracking-[1.5px] font-bold block mb-1">Availability</label>
                  <p className="text-[0.75rem] md:text-[0.9rem] font-medium flex items-center gap-[6px] text-[#6abf69]">
                    <i className="fa-solid fa-briefcase text-[0.8rem]"></i> Open for Internship
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="text-[0.65rem] text-[#6abf69] uppercase tracking-[1.5px] font-bold block mb-1">Profile Summary</label>
                <p className={`text-[0.9rem] leading-[1.6] ${textGray}`}>
                  An IT student pursuing an internship opportunity to apply skills in front-end and back-end development,
                  data analysis, quality assurance, and system analysis within the SDLC.
                </p>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className={`${footer} px-4 md:px-9 py-3 md:py-5 border-t flex gap-2 md:gap-4
            ${theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]"}`}>
            <a href="#projects"
              className="px-4 md:px-7 py-2 md:py-[13px] text-[0.8rem] md:text-[0.95rem] font-medium rounded-[12px] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(76,175,80,0.4)] flex-1 text-center"
              style={{ background: "linear-gradient(135deg, #4caf50, #388e3c)", boxShadow: "0 4px 20px rgba(76,175,80,0.25)" }}>
              View Projects
            </a>
            <a href="#contact"
              className={`px-4 md:px-7 py-2 md:py-[13px] text-[0.8rem] md:text-[0.95rem] font-medium rounded-[12px] border transition-all hover:-translate-y-0.5 flex-1 text-center
                text-[#6abf69] bg-transparent border-[rgba(76,175,80,0.22)] hover:bg-[rgba(76,175,80,0.1)] hover:border-[#6abf69]`}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}