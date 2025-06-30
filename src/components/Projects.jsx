import React, {useRef} from "react";
import ProjectCard from "./ProjectCard";
import portfolio from "../assets/portfolio_website.png";
import bus_reservation from "../assets/bus_reservation_website.png";
import sar_img_col from "../assets/SAR_image_colorisation.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const headingRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
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
    <section ref={projectsRef}
      id="projects"
      className="w-full h-max pb-[4rem] bg-[#000000] justify-center items-center text-pink-300"
    >
      <h2 ref={headingRef} className="font-poppins pt-[5rem] pb-[3rem] pl-[2rem] pr-[2rem] text-center text-2xl md:text-4xl font-medium tracking-wider animated-text">
        Here are the projects I worked on...
      </h2>
      <div ref={containerRef} className="container flex flex-col xl:flex-row justify-around items-center gap-[3rem] xl:gap-0">
        <ProjectCard
          image={portfolio}
          heading="Personal Portfolio Website"
          repoLink="https://github.com/ankanaghosh2001/portfolio2.0"
          liveLink="https://ankana-ghosh.netlify.app/"
          body="This is a personal portfolio website created using React, TailwindCSS and VantaJS."
        />

        <ProjectCard
          image={bus_reservation}
          heading="Bus Ticket and Seat Reservation Website"
          repoLink="https://github.com/ankanaghosh2001/bus_reservation_system"
          liveLink="https://bus-anywhere.netlify.app/"
          body="A full-stack bus ticket booking application built for learning and showcase — with user registration, seat selection, real-time seat availability, downloadable ticket, and user ticket history views."
        />

        <ProjectCard
          image={sar_img_col}
          heading="SAR Image Colorisation"
          repoLink="https://github.com/ShambaC/SAR-Image-Colorisation"
          liveLink="https://drive.google.com/file/d/1ntGH5519SMuEeXFSsejGJzurJGBGgWNO/view?usp=sharing"
          body="This project helps to colorise grayscale SAR images for better processing and analysis, using Latent Diffusion Model.
      (The backend of this project was hosted on a rented server, so unfortunately no live preview is available. But you can check out a recording of how this project works by clicking on live link.)"
        />
      </div>
    </section>
  );
};

export default Projects;
