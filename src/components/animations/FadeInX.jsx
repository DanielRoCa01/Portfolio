import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function FadeInX({ children, direction = "left" }) {
  const el = useRef();

  useEffect(() => {
    import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
      gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

      const xStart = direction === "left" ? -100 : 100;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          el.current,
          { opacity: 0, x: xStart },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el.current,
              start: "top 80%",
              markers: false,
            },
          }
        );
      }, el);

      return () => ctx.revert();
    });
  }, [direction]);

  return <div ref={el}>{children}</div>;
}
