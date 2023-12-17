import React, { useState } from "react";
import Tim1 from "../assets/Tim1.jpeg";
import Tim2 from "../assets/Tim2.jpeg";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <header className="md:h-[calc(100vh-72px)] h-[calc(100vh-80px)] top-8 md:top-0 relative w-full flex">
      <div className="max-w-[1250px] m-auto flex flex-col md:flex-row">
        <div className="container mx-auto md:flex items-center xs:flex-col">
          <div className="flex-initial m-4 md:w-2/4 flex md:flex-col justify-between md:justify-normal">
            <div>
              <h1 className="text-[#241f1e] font-semibold text-5xl md:text-9xl">
                Moth
              </h1>
              <h1 className="text-[#241f1e] font-semibold text-5xl md:text-9xl">
                Medina
              </h1>
            </div>
            <div className="flex text-[#241f1e] flex-col md:flex-row">
              <a
                href="mailto:mothmedina@gmail.com"
                target="_blank"
                className="mr-5 hover:scale-125 duration-300 ease-in-out"
              >
                <MdEmail className="h-12 w-12" />
              </a>
              <a
                href="https://www.instagram.com/themothmedina/"
                target="_blank"
                className="mr-5 hover:scale-125 duration-300 ease-in-out"
              >
                <AiFillInstagram className="h-12 w-12" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src={Tim2}
            alt="Tim"
            className="h-[400px] md:h-[800px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
