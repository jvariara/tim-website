import React from "react";
import Tim1 from "../assets/Tim2.jpeg";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa6";
import Resume from "../assets/Resume.pdf";

const Header = () => {
  return (
    <header className="md:h-[calc(100vh-66px)] h-[calc(100vh-106px)] w-full flex top-[106px] md:top-0 relative">
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
            src={Tim1}
            alt="Tim"
            className="h-[500px] md:h-[800px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
