import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTypewriter({ text = "" }) {
  const el = useRef(null);

  useEffect(() => {
    if (!text) return;

    const totalChars = text.length;
    const obj = { chars:0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.current,
        start: "top 100%",  // Empieza cuando el top del elemento entra al 80% de la pantalla
        end: "top 10% ",
        scrub: true,
        onLeave: () => {
          // Detener la animación y eliminar el trigger cuando se completa
          ScrollTrigger.getById("typewriterTrigger")?.kill();
          tl.kill();
        },
        id: "typewriterTrigger",
      },
    });

    tl.to(obj, {
      chars: totalChars,
      ease: "sine.in",
      onUpdate: () => {
        const current = Math.floor(obj.chars)*1.50;
        el.current.innerHTML = text.slice(0, current); // HTML en vez de texto plano
      },
    });

    return () => {
      ScrollTrigger.getById("typewriterTrigger")?.kill();
      tl.kill();
    };
  }, [text]);

  return (
    <div
      ref={el}
      className="prose text-lg font-medium whitespace-pre-line"
      style={{ minHeight: "1em" }}
    ></div>
  );
}
