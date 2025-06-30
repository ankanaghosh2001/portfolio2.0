import React from 'react'
import { FaGithub, FaGlobe } from "react-icons/fa6";

const ProjectCard = (props) => {
  return (
    <div className='card w-[78%] xl:w-[29vw] xl:h-[38rem] p-[1rem] flex flex-col justify-around items-center gap-[1rem] bg-transparent animated-text border-2 border-pink-300 shadow-[0_0_8px_#ff7ac7] text-justify rounded-lg hover:shadow-[0_0_20px_#ff7ac7] transition-all'>
        <div className="projectImage mb-[5px]">
            <img src={props.image} alt="Project Image" className='h-[15rem]'/>
        </div>
      <div className="heading font-poppins text-center text-2xl font-medium tracking-wider text-black">
        {props.heading}
      </div>
      <div className="links animated-text flex justify-around items-center gap-[1.2rem]">
        <a href={props.repoLink}><FaGithub size={30}/></a>
        <a href={props.liveLink}><FaGlobe size={30}/></a>
      </div>
      <div className="content animated-text">
        {props.body}
      </div>
      
    </div>
  )
}

export default ProjectCard
