const skillCategories = [
  {
    label: "Frontend Stack",
    skills: [
      { name: "HTML5",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "NativeWind",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PHP",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Java",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "SQL",    logo: "https://cdn.simpleicons.org/postgresql/e48900" },
      { name: "MySQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MSSQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "NoSQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    label: "BaaS & Serverless",
    skills: [
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Convex",   logo: "https://cdn.simpleicons.org/convex/ee342f" },
    ],
  },
  {
    label: "Data & Analytics",
    skills: [
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Tableau",  logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "MS Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
      { name: "Jupyter",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    label: "UI/UX Design",
    skills: [
      { name: "Figma",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Photoshop",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    ],
  },
  {
    label: "SDLC, QA & Tools",
    skills: [
      { name: "Git & GitHub",           logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Agile / Kanban & Scrum", icon: "fa-solid fa-arrows-spin" },
      { name: "Jira",                   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Manual Testing",         icon: "fa-solid fa-list-check" },
      { name: "Test Cases",             icon: "fa-solid fa-list-check" },
      { name: "System Analysis",        icon: "fa-solid fa-magnifying-glass-chart" },
    ],
  },
];

const tools = [
  { name: "VS Code", desc: "Primary code editor", color: "#007acc", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Visual Studio", desc: "C# and .NET environment", color: "#7c0eaa", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "PyCharm", desc: "Python and data scripts", color: "#21d789", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
  { name: "Android Studio", desc: "Android app development", color: "#3DDC84", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg" },  { name: "Jupyter", desc: "Data analysis notebooks", color: "#f05726", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Figma", desc: "UI/UX prototyping", color: "#a259ff", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git & GitHub", desc: "Version control", color: "#f05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Photoshop", desc: "Graphic design", color: "#31a8ff", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
];

export default function Skills({ theme }) {
  const bg = theme === "light" ? "bg-white" : "bg-[#0f1610]";
  const bgRaised = theme === "light" ? "bg-[#e8f5e9]" : "bg-[#162018]";
  const bgMain = theme === "light" ? "bg-[#f2f8f2]" : "bg-[#0a0f0b]";
  const textDark = theme === "light" ? "text-[#0d1f0e]" : "text-[#e8f5e9]";
  const textGray = theme === "light" ? "text-[#3d5c3e]" : "text-[#8faa90]";
  const textLight = theme === "light" ? "text-[#7a9e7b]" : "text-[#4a5e4b]";
  const border = theme === "light" ? "border-[rgba(46,125,50,0.12)]" : "border-[rgba(76,175,80,0.1)]";

  return (
    <section id="skills" className={`${bg} transition-colors`}>
      <div className="max-w-[1100px] mx-auto px-6 py-[100px]">
        <div className="text-center mb-[50px]">
          <p className="text-[#6abf69] uppercase tracking-[2px] font-bold text-[0.85rem] mb-[10px]">Capabilities</p>
          <h2 className={`text-[2.4rem] font-bold ${textDark}`}>Skills & Workspace</h2>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-9 mb-[70px]">
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <h3 className={`text-[0.68rem] font-extrabold uppercase tracking-[2px] mb-[14px] flex items-center gap-[14px] ${textLight}
                after:content-[''] after:block after:h-px after:flex-1 ${theme === "light" ? "after:bg-[rgba(46,125,50,0.12)]" : "after:bg-[rgba(76,175,80,0.1)]"}`}>
                <span className="whitespace-nowrap">{cat.label}</span>
              </h3>
              <div className="flex flex-wrap gap-[9px]">
                {cat.skills.map((sk) => (
                  <div key={sk.name}
                    className={`inline-flex items-center gap-2 px-[15px] py-[9px] rounded-[10px] border text-[0.84rem] font-semibold cursor-default transition-all hover:-translate-y-0.5 hover:border-[rgba(76,175,80,0.22)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)]
                      ${bgRaised} ${textGray} ${border}`}>
                    {sk.logo
                      ? <img src={sk.logo} alt={sk.name} className="w-[18px] h-[18px] object-contain block flex-shrink-0"
                          onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      : <i className={`${sk.icon} text-[1.05rem] text-[#6abf69]`}></i>
                    }
                    {sk.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Toolkit */}
        <div className={`border-t border-dashed pt-14 ${border}`}>
          <h3 className={`text-[1.7rem] mb-[6px] ${textDark}`}>My Workspace</h3>
          <p className={`mb-9 text-[1rem] ${textGray}`}>The environments and tools I rely on day-to-day.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {tools.map((tool) => (
              <div key={tool.name}
                className={`flex items-center gap-[14px] px-[18px] py-[14px] border rounded-[10px] transition-all hover:-translate-y-0.5 hover:border-[rgba(76,175,80,0.22)] hover:shadow-[0_6px_20px_rgba(46,125,50,0.08)]
                  ${bgMain} ${border} hover:bg-[rgba(76,175,80,0.05)]`}>
                <div className="w-[42px] h-[42px] flex items-center justify-center rounded-[8px] flex-shrink-0 transition-all"
                  style={{ backgroundColor: `${tool.color}1a`, border: `1px solid ${tool.color}40` }}>
                  <img src={tool.logo} alt={tool.name} className="w-[22px] h-[22px] object-contain" />
                </div>
                <div>
                  <h4 className={`text-[0.95rem] mb-[2px] ${textDark}`}>{tool.name}</h4>
                  <p className={`text-[0.8rem] ${textGray}`}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}