import React, { useRef } from "react";
import EducationCard from "./EducationCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Education = () => {

  const educationRef = useRef();
  const headingRef = useRef();
  const lineRef = useRef();

  useGSAP(() => {
     gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top 60%",
        toggleActions: "play none restart reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1.2
    });

    gsap.from(lineRef.current, {
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 50%",
        toggleActions: "play none restart reverse"
      },
      opacity: 0,
      duration: 1
    });
    
    gsap.utils.toArray(".group").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          toggleActions: "play none restart reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1.2
      });
    });
  })

  return (
    <section ref={educationRef} id="education" className="w-full h-max pb-[4rem] bg-[#000000] justify-around items-center text-pink-300">
      <h2 ref={headingRef} className="font-poppins pt-[5rem] pb-[3rem] text-center text-2xl md:text-4xl font-medium tracking-wider animated-text">
        Where I studied...
      </h2>
      <div className="container flex flex-col justify-center items-center gap-[4rem]">
        <div ref={lineRef} className="verticalLine w-[3px] bg-white h-max flex flex-col items-center gap-[4rem]">
          <div className="group flex items-center">
            <EducationCard heading="Secondary School (Class 10)" instituteName="Debiswari Vidya Niketan" passingYear="2018" marks="89.8%"/>
          </div>
          <div className="group flex items-center">
            <EducationCard heading="Higher Secondary (Class 12)" instituteName="Belur High School" passingYear="2020" marks="86.8%"/>
          </div>
          <div className="group flex justify-around items-center">
            <EducationCard heading="B.Sc. in Computer Science" instituteName="Bijoy Krishna Girls'College" passingYear="2023" marks="8.805"/>
          </div>
          <div className="group flex items-center">
            <EducationCard heading="M.Sc. in Computer Science" instituteName="University of Calcutta" passingYear="2025" marks="8.813"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
