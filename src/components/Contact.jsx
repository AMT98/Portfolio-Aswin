import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#16A6DE]">
            Contact
          </p>
          <p className="py-6">Let's start a conversation</p>
          <div className="py-1">
            <span className="text-[#16A6DE]">Email:</span>
            <h1 className="mb-2 mt-10*">aswinmalla12@gmail.com</h1>
            <span className="text-[#16A6DE]">Phone:</span>
            <h1 className="pb-6">(720)-418-1221</h1>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/a012141e-4460-45a9-9393-bb60cc0767c2"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <h1 className="text-2xl mb-4 text-[#16A6DE]">
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
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
