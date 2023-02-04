import React from "react";
import { MdOutlineSend, MdGetApp } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0A192F]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="md:text-2xl text-lg font-bold text-[#5CEACA] "
            data-aos="fade-right"
          >
            Hi
            <span className="wave">👋</span>
            my name is,
          </h2>
          <h3
            className="text-[#CCD6f6] md:text-9xl text-5xl font-bold py-4 max-w-7xl "
            data-aos="fade-left"
          >
            Aswin Malla.
          </h3>
          <h3
            className="text-[#8892B0] md:text-5xl text-2xl font-bold py-4 max-w-7xl"
            data-aos="fade-left"
          >
            A PERN-stack Developer
          </h3>
          <div>
            <p
              className="md:text-2xl sm:text-xl max-w-7xl  font-bold text-[#8892b0]"
              data-aos="fade-left"
            >
              I am a
              <Typed
                className="md:text-2xl sm:text-xl text-xl sm:max-w-lg font-bold py-1 ml-2 text-[#5CEACA]"
                strings={[
                  "software developer.",
                  "problem solver.",
                  "web developer.",
                  "team player.",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </p>
          </div>
          <div className="py-5 flex flex-row" data-aos="fade-right">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-[#0A192F] mx-2 font-bold w-fit px-6 py-4 flex items-center rounded-3xl hover:scale-110 bg-gradient-to-r from-[#5CEACA] to-[#00CCAF] cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineSend size={25} className="ml-1" />
              </span>
            </Link>
            <Link
              smooth
              duration={500}
              className="group text-[#0A192F] font-bold w-fit px-6 py-4 flex items-center rounded-3xl hover:scale-105 bg-gradient-to-r from-[#5CEACA] to-[#00CCAF] cursor-pointer "
            >
              Resume
              <span className="group-hover:translate-y-2 duration-300 ">
                <MdGetApp size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
