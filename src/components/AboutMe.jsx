import {React, useRef} from "react";
import myPic from "../assets/my_pic_canva.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

  const aboutRef = useRef();
  const headingRef = useRef();
  const imageRef = useRef();
  const textContainerRef = useRef();
  const textRef = useRef();
  const iconsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%",
        end: "bottom 10%",
        toggleActions: "play none restart reverse"
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1
    })
      .from(
        imageRef.current,
        {
          opacity: 0,
          duration: 1
        },
        "-=0.2"
      )
      .from(textContainerRef.current, {
        opacity: 0,
      }, "-=0.4")
      .from(
        iconsRef.current.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.2"
      )
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1
        }
      );
  }, []);


  return (
    <section ref={aboutRef} id="aboutme" className="w-full h-max pb-[4rem] bg-[#000000] text-pink-300">
      <h2 ref={headingRef} className="font-poppins pt-[5rem] pb-[3rem] text-center text-2xl md:text-4xl font-medium tracking-wider animated-text">A little bit about me...</h2>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-[4rem]">
        <div className="leftGroup flex flex-col justify-between items-center gap-[2rem] ">
        <img ref={imageRef}
          src={myPic}
          alt="Image of Ankana Ghosh"
          className="h-[17rem] w-[17rem] md:h-[20rem] md:w-[20rem] xl:h-[27rem] xl:w-[27rem] shadow-xl rounded-full"
        />
        <div ref={iconsRef} className="social-contacts flex justify-around items-center gap-[1.5rem]">
          <a href="https://github.com/ankanaghosh2001"><FaGithub className="text-2xl md:text-4xl"/></a>
          <a href="https://www.linkedin.com/in/ankana-ghosh/"><FaLinkedin className="text-2xl md:text-4xl"/></a>
          <a href="mailto:ankanaghosh1111@gmail.com"><IoMail className="text-2xl md:text-4xl"/></a>
          <a href="https://drive.google.com/file/d/1I1B2ePoJGxW37zjuNXOCUJS8hpovXq55/view?usp=drive_link"><button className="px-3 py-1.5 text-xs md:px-4 md:py-2.5 text-[1rem] font-poppins font-bold hover:bg-black hover:text-pink-300 border-2 border-pink-300 hover:shadow-[0_0_10px_#ff7ac7] rounded-3xl transition-all hover:text-shadow-[0_0_5px_#a30b63] bg-pink-300 text-black text-shadow-none cursor-pointer">My Resume</button></a>
        </div>
        </div>
        <div ref={textContainerRef} className="aboutText w-[90%] h-max xl:w-[45vw] xl:h-[33rem] p-[3px] font-poppins border-0 text-[1rem] relative rounded-lg bg-[linear-gradient(90deg,#f9e3f1,#ff7ac7,#78004c,#ff7ac7,#f9e3f1)] bg-[length:200%] animate-animateBorder">
        
          <div className="aboutTextChild w-full h-full inset-[3px] bg-black rounded-md z-10 p-[2rem]">
            <p ref={textRef} className="animated-text text-justify font-light">
              <b>
                I’m a passionate full-stack web developer with a love for
                creativity beyond just coding. With a strong foundation in
                backend and frontend web technologies, I enjoy creating
                efficient and impactful(beautiful too💕) websites. Beyond
                coding, I’m always looking for new ways to grow and express
                creativity.
                <br />
                <br />
                Outside of coding, you’ll find me:
                <br />
                🎶 Singing my heart out — my evergreen passion!
                <br />
                ✍️Writing stories and thoughts, letting imagination flow.
                <br />
                📚 Getting lost in storybooks, indulged in my delusion.
                <br />
                🗼 Exploring the beauty of the French language.
                <br />
                🍳Experimenting in the kitchen, because good food makes
                everything better!
                <br />
                <br />
                <i>Let’s build, learn, and create together! 🚀</i>
                <br />
                
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
