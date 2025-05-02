import React from "react";
import MagicBtn from "./ui/MagicBtn";
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full pb-10 mb-5"
      id="contact"
      style={{ backgroundImage: "url('/footer-grid.svg')" }}
    >
      {/* <div className="w-full absolute left-0 top-0 min-h-96 inset-0 border border-yellow-500">
        <img src="/footer-grid.svg" alt="grid" className="w-full opacity-50" />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take
          <span className="text-purple"> your</span> digital presence to the
          next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>

        {/* <a href="mailto:msholehhudin.ms@gmail.com"> */}
        <a
          href="https://api.whatsapp.com/send?phone=6285259646204&text=Hello%20Sholeh!%20Can%20I%20Know%20More%20about%20you?%20:)"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MagicBtn
            title="Let's get in touch"
            icon={<FaWhatsapp />}
            position="left"
          />
        </a>

        <div className="w-full mt-16 flex justify-between items-center flex-col md:flex-row">
          <p className="text-sm md:font-normal font-light md:text-base">
            Copyright © 2025. M Sholehhudin
          </p>

          <div className="flex items-center gap-6 md:gap-3 mt-5 md:mt-0">
            {socialMedia.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={item.img} alt={item.img} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
