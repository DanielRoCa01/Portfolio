// src/components/Typewriter.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TypewriterComponent({ text = "", delay = 50 }) {
  const el = useRef(null);

  useEffect(() => {
    const totalChars = text.length;
    const obj = { chars: 0 };

    const tl = gsap.to(obj, {
      chars: totalChars,
      duration: (delay * totalChars) / 1000, // calcular duración total
      ease: "none",
      onUpdate: () => {
        const current = Math.floor(obj.chars);
        el.current.innerHTML = text.slice(0, current);
      },
    });

    return () => tl.kill();
  }, [text, delay]);

  return (
    <span ref={el} className="inline-block whitespace-pre-line"></span>
  );
}
