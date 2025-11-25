import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef();
  const headingRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 60%",
        toggleActions: "play none restart reverse",
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
    })
    .from(containerRef.current, {
      y:-50,
      opacity: 0,
      duration: 1.5
    })

  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="w-full h-max pb-[4rem] bg-[#000000] relative justify-around items-center text-pink-300"
    >
      <h2
        ref={headingRef}
        className="font-poppins px-4 pt-[5rem] pb-[3rem] text-center text-2xl md:text-4xl font-medium tracking-wider animated-text"
      >
        A quick sneak-peek into my skills...
      </h2>
      <div
        ref={containerRef}
        className="container flex flex-col xl:flex-row justify-around items-center lg:items-baseline-last xl:items-baseline gap-[2rem] p-6"
      >
        <SkillCard
          heading="Frontend"
          skillsList={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind",
            "GSAP",
            "Bootstrap",
            "Material UI",
            "Shadcn UI"
          ]}
        />
        <SkillCard
          heading="Backend"
          skillsList={["Node.js", "Express.js", "PHP", "REST APIs"]}
        />
        <SkillCard heading="Databases" skillsList={["MySQL", "SQL", "PL/SQL", "MongoDB"]} />
        <SkillCard
          heading="Programming Languages"
          skillsList={["C", "Java", "Python"]}
        />
        <SkillCard
          heading="Tools & Platforms"
          skillsList={[
            "Github",
            "VS Code",
            "Postman",
            "Netlify",
            "Vercel",
            "Render",
            "Railway",
            "Vite",
            "Figma",
            "Eclipse",
            "IntelliJ"
          ]}
        />
        {/* <SkillCard
          heading="Currently Exploring"
          skillsList={[]}
        /> */}
        <SkillCard
          heading="Linguistic Skills"
          skillsList={["Bengali", "English", "Hindi"]}
        />
      </div>
    </section>
  );
};

export default Skills;
