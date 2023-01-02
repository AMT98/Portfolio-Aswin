import React from "react";
import HeroImage from "../assets/heroImage.png";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-[#838DAB]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#00CCAF]">
              About
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div>
              <p className="text-white-500 font-bold text-lg py-4 max-w-md">
                I am a fullstack developer with over a year of experience. I
                have a strong foundation in both front-end and back-end
                development. I am proficient in languages such as HTML, CSS, and
                JavaScript and have experience working with popular framework
                like React.
              </p>
              <p className="text-white-500 font-bold text-lg py-4 max-w-md">
                In addition to my technical skills, I am also a strong
                communicator and problem-solver. I enjoy collaborating with
                cross-functional teams and am always seeking to improve my
                skills and stay up-to-date with the latest technologies. If you
                are looking for a reliable and skilled fullstack developer, I
                would love the opportunity to discuss how my skills and
                experience can benefit your team.
              </p>
            </div>
            <div className="w-5/12 ">
              <img
                src={HeroImage}
                alt="profilepic"
                className="shadow-xl rounded-full max-w-full h-auto align-middle opacity-50 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
