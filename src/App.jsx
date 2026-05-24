import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [lightbox, setLightbox] = useState(null); 

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const openLightbox = (src, caption) => setLightbox({ src, caption });
  const closeLightbox = () => setLightbox(null);

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} openLightbox={openLightbox} />
      <Skills theme={theme} />
      <Certifications theme={theme} openLightbox={openLightbox} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      {lightbox && (
        <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={closeLightbox} />
      )}
    </div>
  );
}