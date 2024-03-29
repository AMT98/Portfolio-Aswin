import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Postgresql from "../assets/Postgresql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/node.png";
import typescript from "../assets/typescript.png";
// import stripe from "../assets/stripe.png";
import nextjs from "../assets/nextjs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "border-[#BC5B1A]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "border-[#336FD2]",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "border-[#C3980E]",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "border-[#336FD2]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "border-[#2880AC]",
    },
    {
      id: 6,
      src: Postgresql,
      title: "PostgreSQL",
      style: "border-[#08486C]",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "border-[#E5E7EB]",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "border-[#336FD2]",
    },
    {
      id: 9,
      src: express,
      title: "Express JS",
      style: "border-[#7BAF32]",
    },
    {
      id: 10,
      src: typescript,
      title: "TypeScript",
      style: "border-[#336FD2]",
    },
    {
      id: 12,
      src: nextjs,
      title: "Next JS",
      style: "border-[#E5E7EB]",
    },
  ];

  return (
    <div name="experience" className="bg-[#0a1527] w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-bold border-b-4 border-l-4 rounded-md border-[#00CCAF] p-2  inline text-[#00CCAF]">
            Experience
          </p>
        </div>

        <div className="w-max h-max  grid grid-cols-3 sm:grid-cols-4 gap-8 sm:gap-16 mt-8 text-center items-center p-4 px-2 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 md:p-4 border-b-4 p-1 ${style} rounded-md`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="mt-4 text-sm">{title}</p>
              <img src={src} alt="" className="w-6 mx-auto " />
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
