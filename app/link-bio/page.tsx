import MagicBtn from "@/components/ui/MagicBtn";
import { Button } from "@/components/ui/MovingBorders";
import React from "react";
import { BgGradient } from "@/components/ui/BgGradient";

const page = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-20 p-6 ">
        <BgGradient className="rounded-[22px] max-w-[480px] p-4 sm:p-10  bg-white dark:bg-zinc-900">
          <a
            href="#about"
            className="flex gap-3 p-2 min-w-[280px] justify-center items-center"
          >
            <MagicBtn
              title="Show my work"
              // icon={<FaLocationArrow />}
              rounded="lg"
              position="right"
            />
          </a>
          <a
            href="#about"
            className="flex gap-3 p-2 min-w-[280px] justify-center items-center"
          >
            <MagicBtn
              title="Show my work"
              // icon={<FaLocationArrow />}
              rounded="lg"
              position="right"
            />
          </a>
          <a
            href="#about"
            className="flex gap-3 p-2 min-w-[280px] justify-center items-center"
          >
            <MagicBtn
              title="Show my work"
              // icon={<FaLocationArrow />}
              rounded="lg"
              position="right"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6285259646204&text=Hai%20Kak!%20Mau%20bikin%20Bio%20Link%20dongg,%20boleh?%20:)"
            className="flex gap-3 p-2 min-w-[280px] justify-center items-center"
          >
            <MagicBtn
              title="Chat Us"
              // icon={<FaLocationArrow />}
              rounded="lg"
              position="right"
            />
          </a>

          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BgGradient>
        {/* <Button
          //  key={}
          duration={Math.floor(Math.random() * 10000 + 10000)}
          borderRadius="1.75rem"
          className="flex-1 text-white border-neutral-200 min-h-[720px] min-w-[480px] dark:border-slate-800"
        >
  
          <div className="flex flex-col border border-red-500 p-4 min-w-20">
            <MagicBtn
              title="Show my work"
              // icon={<FaLocationArrow />}
              position="right"
            />
            <MagicBtn
              title="Show my work"
              // icon={<FaLocationArrow />}
              position="right"
            />
            <MagicBtn
              title="Show my work"
              // icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </Button> */}
      </div>
    </div>
  );
};

export default page;
