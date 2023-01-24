import React, {useEffect} from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Postgresql from "../assets/Postgresql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png"
import express from "../assets/node.png"
import Aos from 'aos'

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Postgresql,
      title: "PostgreSQL",
      style: "shadow-sky-800",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 9,
      src: express,
      title: "Express JS",
      style: "shadow-lime-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-[#0A192F] w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2  inline text-[#00CCAF]">
            Experience
          </p>
        </div>

        <div className="w-max h-max  grid grid-cols-3 sm:grid-cols-4 gap-8 sm:gap-16 mt-8 text-center items-center p-4 px-2 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 md:p-4 p-1 rounded-3xl ${style}`}
              data-aos="flip-right"
            >
              <img src={src} alt="" className="w-6 mx-auto " />
              <p className="mt-4 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;


// skills 
// languages - 
// JSON(es6)
// html, css, sql

// frameworks- 
// react, node

// tools- 
// FaBellSlash, github, git, postman, chrome devtools

