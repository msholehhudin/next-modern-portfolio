"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectProps } from "@/types/project";
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MagicBtn from "./ui/MagicBtn";
import { FaLocationArrow } from "react-icons/fa";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectProps | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!project) return null;

  // console.log("project props dimodal : ", project);
  const { title, description, details, isPrivate, images, iconLists, link } =
    project;

  const nextImg = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const previousImg = () => {
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="max-w-7xl max-h-[95vh] w-[95vw] overflow-visible p-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-slate-800">
        <div className="overflow-y-auto md:max-h-[65vh] max-h-[70vh]">
          <div className="grid md:grid-cols-5 gap-0 md:gap-8 md:p-8 py-12 px-3">
            {/* Left Column */}
            <div className="md:col-span-3 space-y-4 p-0 md:p-8 md:sticky md:top-0 md:self-start">
              {/* Main Screenshot */}
              <div className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 bg-slate-800/50 border border-slate-500 shadow-2xl">
                <div className="relative h-80 md:pt-12 pt-28">
                  <Image
                    src={images[currentImgIndex]}
                    alt={`${title}`}
                    width={600}
                    height={400}
                    className="object-cover"
                  />

                  {/* Gradient Overlays */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" /> */}

                  {/* Carousel Navigation */}
                  <button
                    className="absolute left-3 -translate-y-1/2 top-1/2 rounded-full bg-black/50 hover:bg-black/70 transition-transform duration-300 opacity-0 group-hover:opacity-100 hover:-translate-x-3"
                    onClick={previousImg}
                  >
                    <ChevronLeft className="w-7 h-7 text-white" />
                  </button>
                  <button
                    className="absolute right-3 -translate-y-1/2 top-1/2 rounded-full bg-black/50 hover:bg-black/70 transition-transform duration-300 opacity-0 group-hover:opacity-100 hover:translate-x-3"
                    onClick={nextImg}
                  >
                    <ChevronRight className="w-7 h-7 text-white" />
                  </button>
                </div>

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-white text-sm font-medium">
                      {currentImgIndex + 1} / {images.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto py-2 px-1">
                  {images.map((image: any, index: any) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImgIndex(index)}
                      className={`relative flex-shrink-0 w-28 h-16 rounded-md pt-2 overflow-hidden border-2 transition-all duration-300 ${
                        currentImgIndex == index
                          ? "border-purple border-3 shadow-lg shadow-purple-500/50"
                          : "border-slate-700 hover:border-purple hover:scale-105 hover:border-3"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        width={600}
                        height={400}
                      />
                      {/* {currentImgIndex == index && (
                        <div className="absolute inset-0  border-purple" />
                      )} */}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:col-span-2 p-0 md:p-0 md:pr-4 overflow-y-auto">
              <DialogHeader className="space-y-4">
                {/* Title & Badge */}
                <div className="space-y-3">
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {title}
                  </DialogTitle>
                  {isPrivate && (
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1.5 text-sm rounded-full">
                      <Lock className="h-4 w-4" />
                      <span>Private Project</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <DialogDescription className="text-slate-300 text-base leading-relaxed">
                  {description}
                </DialogDescription>
              </DialogHeader>

              {/* Detailed information */}
              <div className="space-y-5 pt-4 border-t border-slate-400">
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Role
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {details?.role}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {iconLists?.map((icon: any, index: any) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-lg flex items-center bg-slate-800/50 border border-slate-700 justify-center hover:scale-110 transition-transform p-1"
                      >
                        <Image src={icon} alt="tech" width={30} height={30} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                {details?.desc && (
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                      Overview
                    </h3>
                    <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                      {details.desc.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {details?.keyFeatures && (
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {details.keyFeatures.map((item, index) => (
                        <li
                          key={index}
                          className="text-slate-300 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-purple-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <p>{details.detailLists}</p> */}
                  </div>
                )}

                {/* Note */}
                {details.note && (
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm italic">
                      {details.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {link && !isPrivate && (
                <a
                  href={link}
                  className="flex gap-3 p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicBtn
                    title="View Live Project"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
