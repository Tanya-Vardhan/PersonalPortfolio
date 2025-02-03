import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import aps from "../../assets/aps.png";
import rotalogo from "../../assets/rota-logo.png";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
         
         
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={aps} className="h-20 w-20"/>
            <span className="text-white">
              <h2 className="leading-tight">Algorithmic and Programming Society</h2>
              <p className="text-sm leading-tight font-thin">
                Dec 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as technical team member</li>
                <li>- Promote Competitive Programming culture in NIT Rourkela</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img src={rotalogo} className="h-20 w-20"/>
            <span className="text-white">
              <h2 className="leading-tight">Rotaract Club, NIT Rourkela</h2>
              <p className="text-sm leading-tight font-thin">
                Oct 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as management team member.</li>
                <li>- Contribute to social service events organised by the club.</li>
              </ul>
            </span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Experience;