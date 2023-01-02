import React from "react";
import { MdOutlineSend } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "react-typed";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#111111]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#0EC8AD]">
            Hello!
            <span className="wave">👋</span>
          </h2>
          <h3 className="text-white font-bold py-4 max-w-md sm:text-2xl ">
            I'm Aswin Malla.
            <br></br>
            Full-stack Developer
          </h3>
          <div>
            <p className="md:text-4xl sm:text-2xl text-xl font-bold text-white">
              I am a professional
            </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-xl font-bold py-1  text-[#0EC8AD]"
            strings={["Web Developer", "Web Designer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </div>
          <div className="py-5">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white hover:font-bold underline w-fit px-6 py-4 flex items-center rounded-3xl hover:scale-110 bg-gradient-to-r from-[#00CDAE] to-[#00CCAF] cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineSend size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-6/12 ">
          <img
            src={HeroImage}
            alt="profilepic"
            className="shadow rounded-full max-w-full h-auto align-middle border-none "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
