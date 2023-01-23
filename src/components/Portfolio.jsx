import React, {useEffect} from "react";
import strangersThings from "../assets/portfolio/ST.PNG";
import guessingNum from "../assets/portfolio/guessnum.PNG";
import tictactoe from "../assets/portfolio/tikitak.PNG";
import artCollector from "../assets/portfolio/artProject.PNG";
import qwerty from "../assets/portfolio/qwerty.PNG";
import personalWebsiteV2 from "../assets/portfolio/portfolioV2.PNG";
import {MdPreview} from 'react-icons/md'
import { FaGithub } from "react-icons/fa";
import Aos from 'aos'
import "aos/dist/aos.css"

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  const portfolios = [
    {
      id: 1,
      title: `Stranger's Things`,
      src: strangersThings,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://st-amt98.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25}/>
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/Strangers-Things"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
    },
    {
      id: 2,
      title: "Personal Website",
      src: personalWebsiteV2,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://aswinmalla.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25}/>
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/Portfolio-Aswin"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
    },
    {
      id: 3,
      title: "Art Collector",
      src: artCollector,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://artcollectorfsa.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25}/>
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/UNIV_Art_Collector_React_Starter"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
    },
    {
      id: 4,
      title: "Tic-Tac-Toe",
      src: tictactoe,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://tikitak.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25}/>
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/Tic-Tac-Toe"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
    },
    {
      id: 5,
      title: "Qwerty",
      src: qwerty,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://qwertyfsa.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25}/>
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/QWERTY"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
    },
    {
      id: 6,
      title: "Guessing Number",
      src: guessingNum,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://guessingnum.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25}/>
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/Guessing-Game"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-[#0A192F] w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="flip-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#00CCAF]">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" >
          {portfolios.map(({ id, src, demo, code, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-200 rounded-xl hover:scale-95 text-[white] hover:text-[#00CCAF]"
              data-aos="flip-up"
            >
              <img src={src} alt="" className="rounded-md duration-200 " />
              <div className="flex items-center justify-center text-[#00CCAF] font-bold">{title}</div>
              <div className="flex items-center ml-7">
                {demo}
                {code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
