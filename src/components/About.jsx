import React, {useEffect} from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import HeroImage from "../assets/heroImage.png";


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-[#838DAB]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="pb-8" data-aos= "flip-right">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#00CCAF]" >
              About
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div data-aos="fade-up-right">
              <p className="text-white-500 font-bold md:text-md text-sm py-4 max-w-md">
                I am a full-stack developer with over a year of experience
                working with the PERN stack (PostgreSQL, Express, React, and
                Node.js). I have a passion for creating efficient and visually
                pleasing web applications. I am constantly seeking to expand my
                knowledge and stay up to date with the latest web development
                technologies.
              </p>
              <p className="text-white-500 font-bold md:text-md text-sm py-4 max-w-md">
                I have experience in developing responsive front-end using React
                and TailwindCSS and a solid understanding of HTML, CSS, and
                JavaScript. On the back-end, I have experience with Node.js,
                Express, and PostgreSQL. I am a team player and have excellent
                communication skills, which have helped me to work effectively
                with remote teams. I am also a quick learner and am always
                looking for new challenges. I am excited to continue to develop
                my skills and work on new and exciting projects. When I am not
                coding, I enjoy reading about new technologies, hiking, working
                out, cooking, and spending time with my family.
              </p>
            </div>
            <div className="w-5/12 " data-aos= "fade-down-left">
              <img
                src={HeroImage}
                alt="profilepic"
                className="shadow-xl rounded-full max-w-full h-auto align-middle opacity-50 hover:opacity-100 hover:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
