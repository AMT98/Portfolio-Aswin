import React from "react";
import { MdOutlineSend } from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0A192F] p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8" data-aos="flip-right">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#00CCAF]">
            Contact
          </p>
        </div>
        <div className=" flex justify-center items-center" >
          <form
            action="https://getform.io/f/a012141e-4460-45a9-9393-bb60cc0767c2"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            data-aos="fade-up-left"
          >
          <p className="py-2 text-[#838DAB]" data-aos="zoom-in">Let's start a conversation</p>
          <div className="py-1" data-aos="zoom-in">
            <span className="text-[#16A6DE]">Email:</span>
            <h1 className="mb-2 mt-10* text-[#838DAB]">aswinmalla12@gmail.com</h1>
            <span className="text-[#16A6DE]">Phone:</span>
            <h1 className="pb-3 text-[#838DAB]">(720)-418-1221</h1>
          </div>
            <h1 className="text-2xl mb-4 text-[#00CCAF]">
              Please fill out all sections
            </h1>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-[#0A192F] bg-gradient-to-r from-[#00CDAE] to-[#00CCAF] 0 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Send <MdOutlineSend size={25} className="ml-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
