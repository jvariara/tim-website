import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="p-[110px] md:py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[#241f1e] font-semibold text-4xl items-center">
            About Me
          </h6>
          <p className="text-2xl md:text-3xl my-4 text-[#241f1e] text-center">
            Moth Medina was born in Poughkeepsie, New York and eventually would
            travel north to attend the University at Buffalo theater &
            performance program, where he will graduate in May of 2024.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
