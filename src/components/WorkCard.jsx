import React from "react";

const WorkCard = (props) => {
  return (
    <div className="relative rounded-lg p-[3px] bg-[linear-gradient(90deg,#f9e3f1,#ff7ac7,#78004c,#ff7ac7,#f9e3f1)] bg-[length:200%_auto] animate-animateBorder">
      <div className="innerContainer flex flex-col md:flex-row justify-around items-center gap-8 rounded-md bg-black p-6">
        
        <div className="image">
          <img src={props.image} alt="Company Logo" className="h-auto w-[10rem] md:w-[15rem] bg-white rounded-lg" />
        </div>

        <div className="details text-center md:text-left flex flex-col justify-center items-center md:items-start gap-2 font-poppins">
          <div className="workTitle text-xl md:text-2xl font-bold text-white">{props.title}</div>
          <div className="company text-md md:text-lg font-semibold text-pink-300">{props.company}</div>
          <div className="duration text-sm md:text-md text-gray-300">{props.duration}</div>
        </div>

      </div>
    </div>
  );
};

export default WorkCard;
