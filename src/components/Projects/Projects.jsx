import React from "react";
import ProjectCard from "./ProjectCard";
import portfolioLogo from "../../assets/portfolioLogo.png"
import currencyConverterlogo from "../../assets/currencyConverterlogo.png"
import rotaweblogo from "../../assets/rotaweblogo.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Rotaract Website"
          imgsrc={rotaweblogo}
          main="Built the official website of Rotaract Club of NIT Rourkela with a team where I was responsible for preparing the gallery section of the website."
          srclink="https://github.com/SouravBiswal17/ROTARACT-WEBSITE"
          demolink=""
        />
        <ProjectCard
          title="Personal Portfolio"
          imgsrc={portfolioLogo}
          main="Created my personal portfolio using React and Tailwind CSS to track my journey as a web developer and showcase my skills."
          srclink=""
          demolink=""
        />
        <ProjectCard
          title="Currency-Converter"
          imgsrc={currencyConverterlogo}
          main="Built a currency converter using vanilla CSS and Javascript as a learning project to understand the working of APIs."
          srclink="https://github.com/Tanya-Vardhan/currencyConverter"
          demolink="https://tanya-vardhan.github.io/currencyConverter/"
        />
      </div>
    </div>
  );
};

export default Projects;