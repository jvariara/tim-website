import React, { useState } from "react";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const menu = [
    { name: "Home", link: "/", target: false },
    { name: "About", link: "#about", target: false },
    { name: "Resume", link: Resume, target: true },
    { name: "Contact", link: "#contact", target: false },
  ];

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <nav className="bg-[#241f1e] shadow-md w-full top-0 left-0 z-[100] px-8 py-4 fixed">
      <div className="md: flex items-center justify-between py-2 max-w-[1250px] m-auto">
        <div className="font-bold text-3xl cursor-pointer flex items-center text-white">
          <img
            className="w-[50px] h-[50px] hover:scale-125 duration-300 hidden"
            src=""
            alt="Logo"
          />
        </div>

        <ul
          className={`flex md:items-center md:pb-0 pb-12 md:pl-0 transition-all duration-300 ease-in ${
            clicked ? "open" : " "
          }`}
        >
          {menu.map((item, idx) => (
            <li
              key={idx}
              className="text-center md:ml-8 md:my-0 my-7"
              onClick={handleClick}
            >
              <a
                href={item.link}
                className="text-white md:hover:text-[#863C19] hover:text-[#241f1e] duration-300"
                target={item.target ? "_blank" : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div id="nav-mobile" onClick={handleClick}>
          <i
            id="nav-bar"
            className={`fas ${clicked ? "fa-times" : "fa-bars"}`}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
