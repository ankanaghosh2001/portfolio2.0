import React from "react";

const SkillCard = (props) => {
  return (
    <div className="skillsCard w-max h-max rounded-xl p-[1.2rem] flex flex-col lg:flex-row xl:flex-col justify-center items-center gap-[1.5rem] relative bg-black border-2 border-pink-300 shadow-[0_0_8px_#ff7ac7] hover:shadow-[0_0_15px_#ff7ac7] hover:scale-105 transition-all">
      <div className="heading font-poppins text-center text-xs xl:text-md font-medium tracking-wider animated-text">
        {props.heading}
      </div>
      <div className="content grid grid-cols-2 lg:flex lg:flex-row xl:flex xl:flex-col justify-center items-center gap-5 w-max">
        {props.skillsList.map((skill, idx) => (
          <div key={idx} className="hover:bg-pink-300 hover:text-black px-3 py-2 rounded-lg text-center text-sm xl:text-md font-medium cursor-pointer shadow-[0_0_8px_#ff7ac7] bg-black text-pink-300 text-shadow-[0_0_3px_#ff7ac7] transition duration-300">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
