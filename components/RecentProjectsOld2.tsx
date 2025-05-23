"use client";

import { projects } from "@/data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import Link from "next/link";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project: any) => {
    // console.log("ini adalah data project : ", project);

    setSelectedProject(project);
    console.log("ini state : ", selectedProject);
  };
  const handleClose = () => setSelectedProject(null);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 border border-yellow-400">
        {projects.map((project) => {
          const {
            id,
            title,
            des,
            img,
            iconLists,
            link: projectLink,
            isPrivate,
          } = project;

          const projectCardContent = (
            <>
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[570px] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
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
                    {isPrivate ? "See Details" : "Check Live Site"}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </>
          );

          const content = isPrivate ? (
            <PinContainer title={"SeeDetails"}>
              {projectCardContent}
            </PinContainer>
          ) : (
            <PinContainer title={projectLink} href={projectLink}>
              {projectCardContent}
            </PinContainer>
          );

          return (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={id}
            >
              {isPrivate ? (
                <div
                  role="button"
                  className="text-start cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpen(project);
                  }}
                >
                  {content}
                </div>
              ) : (
                <Link
                  href={projectLink || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleClose}
        project={selectedProject}
      />
    </div>
  );
};

export default RecentProjects;
