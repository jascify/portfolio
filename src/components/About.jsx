const education = [
  {
    years: "2023 – Present",
    school: "Pamantasan ng Lungsod ng Valenzuela | BSIT",
    honors: ["Full CHED Merit Scholarship (CMSP) Grantee"],
  },
  {
    years: "2021 – 2023",
    school: "Our Lady of Fatima University | ABM Strand",
    honors: ["Graduated with Highest Honors (GWA: 98)", "Subject Excellence Awardee in 26 Subjects"],
  },
  {
    years: "2017 – 2021",
    school: "Paso de Blas National HS",
    honors: ["Graduated with High Honors (GWA: 96)"],
  },
];

const interests = [
  { title: "Mobile Development", desc: "Creating cross-platform mobile apps with smooth and responsive user experiences." },
  { title: "Web Development", desc: "Building web applications from the interface down to the server — making sure both ends work well together." },
  { title: "Data Analysis", desc: "Turning raw numbers into actionable narratives." },
  { title: "Quality Assurance", desc: "Writing test cases and manual testing in Agile workflows." },
];

export default function About({ theme }) {
  const bg = theme === "light" ? "bg-white" : "bg-[#0f1610]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";
  const border = theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]";

  return (
    <section id="about" className={`${bg} transition-colors`}>
      <div className="max-w-[1100px] mx-auto px-6 py-[100px]">
        {/* Profile Row */}
        <div className="flex gap-[60px] items-center mb-20 flex-col-reverse md:flex-row md:text-left text-center">
          <div className="flex justify-center md:block">
            <img src="/assets/about-pic.jpg" alt="Jasmine Miel Aguilar"
              className={`w-[300px] md:w-[750px] h-[380px] object-cover rounded-[18px]`}
              style={{ boxShadow: `16px 16px 0px -4px ${theme === "light" ? "#ffffff" : "#0f1610"}, 16px 16px 0px 0px #388e3c` }} />
          </div>
          <div>
            <p className="text-[#6abf69] uppercase tracking-[2px] font-bold text-[0.85rem] mb-[10px]">My Story</p>
            <h2 className={`text-[2.6rem] font-bold mb-5 ${textDark}`}>About Me</h2>
            <p className={`text-[1.05rem] leading-[1.8] mb-[15px] ${textGray}`}>
              I'm a BS Information Technology student at{" "}
              <strong className={textDark}>Pamantasan ng Lungsod ng Valenzuela</strong> and a full CHED Merit Scholar.
              What began as a simple curiosity about how websites work has evolved into a deep focus on front-end development and data analysis.
            </p>
            <p className={`text-[1.05rem] leading-[1.8] ${textGray}`}>
              I've built a strong foundation in the full SDLC—from system analysis to rigorous QA testing.
              I enjoy bridging the gap between technical logic and clean, user-centric design.
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-[60px] border-t pt-[60px] ${border}`}>
          {/* Education */}
          <div>
            <h3 className={`text-[1.3rem] mb-9 font-semibold relative ${textDark}
              after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-9 after:h-0.5 after:bg-[#4caf50]`}>
              Education
            </h3>
            <div className="timeline">
              {education.map((item) => (
                <div key={item.years} className={`mb-8 pl-5 border-l-2 border-[#4caf50] relative
                  before:content-[''] before:absolute before:-left-[5px] before:top-[7px] before:w-2 before:h-2 before:rounded-full before:bg-[#4caf50]`}>
                  <span className={`text-[0.8rem] font-bold tracking-[0.5px] ${theme === "light" ? "text-[#7a9e7b]" : "text-[#4a5e4b]"}`}>{item.years}</span>
                  <h4 className={`text-[1rem] my-[5px] ${textDark}`}>{item.school}</h4>
                  {item.honors.map((h) => (
                    <span key={h} className="text-[0.88rem] text-[#6abf69] font-medium block mt-[5px]">{h}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className={`text-[1.3rem] mb-9 font-semibold relative ${textDark}
              after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-9 after:h-0.5 after:bg-[#4caf50]`}>
              What I'm Into
            </h3>
            <div className="flex flex-col gap-6">
              {interests.map((item) => (
                <div key={item.title}
                  className={`pl-4 border-l-2 transition-colors hover:border-[#4caf50]
                    ${theme === "light" ? "border-[rgba(46,125,50,0.2)]" : "border-[rgba(76,175,80,0.22)]"}`}>
                  <h4 className={`mb-[5px] text-[0.98rem] font-bold ${textDark}`}>{item.title}</h4>
                  <p className={`text-[0.88rem] leading-[1.6] ${textGray}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}