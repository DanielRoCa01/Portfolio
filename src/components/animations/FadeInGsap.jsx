import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function FadeInGsap({ children }) {
  const el = useRef();

  useEffect(() => {
    // Importar dinámicamente sólo en cliente
    import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
      gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el.current,
              start: "top 60%",
              
              markers: false,
            },
          }
        );
      }, el);

      // Aseguramos el refresco para casos lentos
    

      return () => ctx.revert();
    });
  }, []);

  return <div ref={el}>{children}</div>;
}
