import React from "react";
import { MdOutlineSend } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0A192F]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" sm:text-lg font-bold text-[#5CEACA] ">
            Hi
            <span className="wave">👋</span>
            my name is,
          </h2>
          <h3 className="text-[#CCD6f6] sm:text-8xl font-bold py-4 max-w-5xl  ">
            Aswin Malla.
            <br></br>
            Full-stack Developer
          </h3>
          <div className="max-w-5xl">
            <p className="md:text-4xl sm:text-2xl text-xl max-w-4xl font-bold text-[#8892b0]">
              I am a 
            <Typed
              className="md:text-4xl sm:text-2xl text-xl font-bold py-1 ml-3 text-[#5CEACA]"
              strings={[
                "web developer.",
                "web designer.",
                "problem solver.",
                "team player.",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            </p>
          </div>
          <div className="py-5">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black  hover:text-white w-fit px-6 py-4 flex items-center rounded-3xl hover:scale-110 bg-gradient-to-r from-[#5CEACA] to-[#00CCAF] cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineSend size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
