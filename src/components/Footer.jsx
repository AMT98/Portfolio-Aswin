import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-gradient-to-r from-[#00CDAE] to-[#00CCAF]">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-[#0A192F] sm:text-center dark:text[#0A192F]">
          © 2023{" "}
          <a href="https://aswinmalla.netlify.app/" className="hover:underline">
            Aswin Malla
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.linkedin.com/in/aswinmalla/"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A192F] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <>
                LinkedIn <FaLinkedin size={30} />
              </>
            </svg>
            <span className="sr-only">LinkedIn page</span>
          </a>
          <a
            href="https://github.com/amt98"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A192F] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <>
                Github <FaGithub size={30} />
              </>
            </svg>
            <span className="sr-only">GitHub page</span>
          </a>
          <a
            href="mailto: aswinmalla12@gmail.com"
            className="text-[#0A192F] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <>
                Mail <HiOutlineMail size={30} />
              </>
            </svg>
            <span className="sr-only">Mail</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A192F] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <>
                Resume <BsFillPersonLinesFill size={30} />
              </>
            </svg>
            <span className="sr-only">Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
