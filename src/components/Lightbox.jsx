import { useEffect } from "react";

export default function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/93 flex items-center justify-center flex-col p-5"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-[#aaa] text-[36px] font-bold leading-none cursor-pointer hover:text-[#6abf69] transition-colors bg-transparent border-none">
        &times;
      </button>
      <img src={src} alt={caption}
        className="max-w-[90%] max-h-[80vh] rounded-[8px] shadow-[0_0_40px_rgba(76,175,80,0.15)]"
        style={{ animation: "zoomIn 0.3s ease" }} />
      {caption && <p className="mt-4 text-[#aaa] text-[1rem] tracking-[1px] text-center">{caption}</p>}
      <style>{`@keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
    </div>
  );
}