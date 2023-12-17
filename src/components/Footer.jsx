import React from 'react'
import Resume from "../assets/Resume.pdf"

const Footer = () => {
  const list = [
    { name: "Instagram", link: "https://www.instagram.com/themothmedina/" },
    { name: "Resume", link: Resume },
    { name: "Email", link: "mailto:mothmedina@gmail.com"}
  ]

  return (
    <footer className="shadow-md bg-[#241f1e] w-full top-0 left-0 z-[100] px-8">
      <div className="flex flex-col items-center justify-center py-[4rem]">
        <a href="#">
          <img
            className="w-[50px] h-[50px] hover:scale-125 duration-300 hidden"
            src=""
            alt="Logo"
          />
        </a>
        <div className="max-w-[450px] w-full flex justify-between my-8">
          {list.map((item) => (
            <a
              key={item.name}
              className="text-white hover:text-[#863C19] duration-300"
              href={item.link}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="text-white">Copyright &copy; 2023 The Moth Medina</div>
      </div>
    </footer>
  )
}

export default Footer