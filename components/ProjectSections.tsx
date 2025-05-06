"use client";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

interface ProjectProps {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  isPrivate: boolean;
  details: object;
}

interface ClientProjectProps {
  projects: ProjectProps[];
}

const ProjectSections = ({ projects }: ClientProjectProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  const handleOpen = (project: ProjectProps) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  // useEffect(() => {
  //   console.log("ini log set selected project : ", selectedProject);
  // }, [selectedProject]);

  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
      {projects.map((project) => {
        const { id, img, title, des, iconLists } = project;

        return (
          <div
            className=" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
            onClick={() => handleOpen(project)}
          >
            {/* <PinContainer title={link} href={link}> */}
            <div className="relative border border-slate-800 rounded-2xl p-4 hover:-translate-y-4 ease-in-out transition-all cursor-pointer hover:border-purple duration-300 group">
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[570px] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  {/* Glow Effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-t-2xl pointer-events-none" />

                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="text-sm lg:text-xl lg:font-normal font-light line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full w-8 h-8 bg-black lg:w-10 lg:h-10 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Open Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
            {/* </PinContainer> */}
          </div>
        );
      })}

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleClose}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectSections;
