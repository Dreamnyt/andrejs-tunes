import React from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import Navigation from "./Navigation";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <div className="relative">
      <div className="flex flex-1 flex-col justify-center text-center h-screen">
        <Navigation />
        <div className="flex flex-1 flex-col justify-center text-center text-light-text dark:text-dark-text mx-12">
          <div className="flex flex-col flex-1 items-center justify-center m-0">
            <div className="flex flex-col items-center content-center">
              <main className="block">
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold mb-12 text-black dark:text-white">
                    Welcome to{" "}
                    <span className="text-green-primary">
                      <span className="italic">Andrej's</span> Tunes
                    </span>
                    .
                  </h3>

                  <h3 className="text-md sm:text-xl font-semibold mb-12 text-black dark:text-white">
                    Your most played tracks and artists on Spotify from the last
                    four weeks, six months or all time!
                  </h3>

                  <h3 className="text-md sm:text-xl font-semibold mb-12 text-black dark:text-white">
                    Login below to get started.
                  </h3>
                  <button
                    id="logIn"
                    className="bg-green-primary rounded-3xl text-lg sm:text-3xl py-0.5 px-20 sm:py-1.5 sm:px-24 font-bold text-white hover:scale-150"
                    onClick={() => {
                      window.location.href =
                        "https://andrejs-tunes-backend.herokuapp.com/login";
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </main>
            </div>
          </div>
          <footer className="p-5 sm:p-10 text-lg text-light-text dark:text-footer-gray text-black dark:text-white">
            <div className="flex items-center justify-center my-0 mx-auto w-full m-w-full">
              <div
                className="flex flex-col sm:flex-row items-center"
                id="footer-content"
              >
                <div>
                  <a
                    href="mailto:aacevski@gmail.com"
                    className="fadein-colors font-body"
                  >
                    <FiMail className="w-5 h-5 mr-8 inline-block hover:text-green-primary transition duration-200"></FiMail>
                  </a>
                  <a
                    href="https://github.com/Dreamnyt"
                    className="fadein-colors font-body"
                  >
                    <FiGithub className="w-5 h-5 mr-8 inline-block hover:text-green-primary transition duration-200"></FiGithub>
                  </a>
                  <a href="https://www.linkedin.com/in/andrej-acevski-6292ba179/">
                    <FiLinkedin className="w-5 h-5 inline-block hover:text-green-primary transition duration-200"></FiLinkedin>
                  </a>

                  <p className="block mt-4 text-sm font-semibold sm:hidden"></p>

                  <h3 className="block mt-4 text-sm font-semibold">
                    Built by Andrej Acevski
                  </h3>

                  <a
                    className="block mt-2 text-sm font-semibold sm:hidden"
                    href="./about"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
