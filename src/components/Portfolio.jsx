import React, { useEffect } from "react";
import fitnessTracker from "../assets/portfolio/fitnessTracker.PNG";
import strangersThings from "../assets/portfolio/ST.PNG";
import guessingNum from "../assets/portfolio/guessnum.PNG";
import tictactoe from "../assets/portfolio/tikitak.PNG";
import artCollector from "../assets/portfolio/artProject.PNG";
import qwerty from "../assets/portfolio/qwerty.PNG";
import personalWebsiteV2 from "../assets/portfolio/portfolioV2.PNG";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Modal from "./Modal";
// import Aos from 'aos'
var Aos = require("aos");
// import 'aos/dist/aos.css'

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const portfolios = [
    {
      id: 1,
      title: `Fitness Tracker`,
      src: fitnessTracker,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://fitnesstraker.netlify.app/myroutines"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25} />
        </a>
      ),
      code: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://github.com/AMT98/FitnessTracker_Front-End"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      ),
      modal: (
        <Modal
          modalTxt="Fitness Tracker"
          modalDescription="Implemented full-stack development, including creating RESTful APIs with Express.JS, managing database with PostgreSQL, and building responsive UI with React.JS Tech: Express.JS | Node.JS | PostgreSQL | React| Router | Jest | Tailwind | JavaScript | CSS | Html"
        />
      ),
    },
    {
      id: 2,
      title: `Stranger's Things`,
      src: strangersThings,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://st-amt98.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25} />
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
      modal: (
        <Modal
          modalTxt="Stranger's Things"
          modalDescription="Developed a standard CRUD app with private messaging tools,
          developed a front end UI utilizing React.JS for a community web application pulling from an external API 
          Tech: React | Router | Html | CSS | JavaScript | Bootstrap | Netlify"
        />
      ),
    },
    {
      id: 3,
      title: "Personal Website",
      src: personalWebsiteV2,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://aswinmalla.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25} />
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
      modal: (
        <Modal
          modalTxt="Personal Website"
          modalDescription="Developed a personal website with utilizing React.JS. Tech: React | Router | Html | CSS | JavaScript | Tailwind | Netlify "
        />
      ),
    },
    {
      id: 4,
      title: "Art Collector",
      src: artCollector,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://artcollectorfsa.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25} />
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
      modal: (
        <Modal
          modalTxt="Art Collector"
          modalDescription="Created a simple search engine for the Harvard Art Museums"
        />
      ),
    },
    {
      id: 5,
      title: "Tic-Tac-Toe",
      src: tictactoe,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://tikitak.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25} />
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
      modal: (
        <Modal
          modalTxt="Tic-Tac-Toe"
          modalDescription="Created an arcade game with vanilla JAVASCRIPT, HTML, and CSS."
        />
      ),
    },
    {
      id: 6,
      title: "Qwerty",
      src: qwerty,
      demo: (
        <a
          className="w-1/2 px-6 py-3 m-4"
          href="https://qwertyfsa.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <MdPreview size={25} />
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
      modal: (
        <Modal
          modalTxt="QWERTY"
          modalDescription="Created a static e-commerce site implementing HTML and CSS"
        />
      ),
    },
    // {
    //   id: 7,
    //   title: "Guessing Number",
    //   src: guessingNum,
    //   demo: (
    //     <a
    //       className="w-1/2 px-6 py-3 m-4"
    //       href="https://guessingnum.netlify.app/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <MdPreview size={25} />
    //     </a>
    //   ),
    //   code: (
    //     <a
    //       className="w-1/2 px-6 py-3 m-4"
    //       href="https://github.com/AMT98/Guessing-Game"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <FaGithub size={25} />
    //     </a>
    //   ),
    //   modal: (
    //     <Modal
    //       modalTxt="Guess the number"
    //       modalDescription="Created a guessing number game implementing vanilla JAVASCRIPT, HTML, and CSS"
    //     />
    //   ),
    // },
  ];

  return (
    <div name="portfolio" className="bg-[#0A192F] w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-l-4 rounded-md border-[#00CCAF] p-2  inline text-[#00CCAF]">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, title, modal }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-200 rounded-xl cursor-pointer text-[white] hover:text-[#00CCAF]"
            >
              <img src={src} alt="" className="rounded-md duration-200 " />
              <div className="flex items-center justify-center text-[#00CCAF] font-bold">
                {title}
              </div>
              <div className="flex items-center ">
                {demo}
                {code}
                {modal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
