import React from "react";

const EducationCard = (props) => {
  const isPercent = props.marks.trim().endsWith("%");

  return (
    <div className="card w-max h-max rounded-lg p-[1.2rem] md:p-[1.5rem] flex flex-col justify-center items-center bg-black border-2 border-pink-300 shadow-[0_0_8px_#ff7ac7] hover:scale-105 hover:shadow-[0_0_15px_#ff7ac7] transition-all">
      <div className="heading font-poppins pb-[1rem] md:pb-[1.5rem] text-center text-md md:text-2xl font-medium tracking-wider animated-text">
        {props.heading}
      </div>
      <div className="content animated-text text-sm md:text-lg text-center">
        <p>Institute : {props.instituteName}</p>
        <p>Graduation Year: {props.passingYear}</p>
        <p>
          <b>
            {isPercent ? "Percentage" : "CGPA"}: {props.marks}
          </b>
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
