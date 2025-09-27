import React, {useRef} from "react";
import WorkCard from "./WorkCard";
import tcsLogo from "../assets/tcsLogo.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef();
  const headingRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workRef.current,
        start: "top 60%",
        toggleActions: "play none restart reverse",
      }
    })

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.7,
    })
    .from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    });
    
  }, []);

  return (
    <section ref={workRef}
      id="workexperience"
      className="w-full h-max pb-[4rem] bg-[#000000] justify-center items-center text-pink-300"
    >
      <h2 ref={headingRef} className="font-poppins pt-[5rem] pb-[3rem] pl-[2rem] pr-[2rem] text-center text-2xl md:text-4xl font-medium tracking-wider animated-text">
        My Work Experience...
      </h2>
      <div ref={containerRef} className="container flex flex-col xl:flex-row justify-around items-center gap-[3rem] xl:gap-0">
        <WorkCard image={tcsLogo} title="Assistant System Engineer" company="Tata Consultancy Services" duration="August, 2025 - Present"/>
      </div>
    </section>
  );
};

export default Work;
