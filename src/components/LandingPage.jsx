import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";

const LandingPage = () => {
  
  const vantaRef = useRef(null);
  
  useEffect(() => {
    const vantaEffect = window.VANTA.DOTS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xff96e7,
      color2: 0xd620ff,
      backgroundColor: 0x000000,
      size: 3.2,
      spacing: 27.0,
      showLines: false,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);


  return <section ref={vantaRef} id="home" className="w-full h-screen flex justify-around items-center text-pink-300 relative">
    <div className="hero-text font-poppins text-3xl md:text-6xl">Hi, I'm&nbsp;
      <ReactTyped
      strings={[
        "  Ankana Ghosh.",
        " a Web Developer."
      ]}
      typeSpeed={60}
      backSpeed={90}
      startDelay={1200}
      backDelay={1200}
      loop
    /></div>
  </section>;
};

export default LandingPage;
