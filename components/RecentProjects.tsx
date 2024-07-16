import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 border border-yellow-400">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="border border-red-500 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center w-[80vw] h-[20vh] sm:w-96 overflow-hidden lg:h-[30vh] mb-10">
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
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
