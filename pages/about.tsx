import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import queryString from "query-string";
import { LandingPage } from "../components/LandingPage";
import LoggedIn from "../components/LoggedIn";
import { NextSeo } from "next-seo";
import Navigation from "../components/Navigation";

export default function About({}: any) {
  return (
    <>
      <NextSeo
        title="Andrej's Tunes"
        description="A website that displays your Spotify statistics."
      />
      <div className="flex flex-1 flex-col justify-center text-center h-screen">
        <Navigation />

        <div className="flex flex-1 flex-col justify-center text-center text-light-text dark:text-dark-text mx-12">
          <div className="flex flex-col flex-1 items-center justify-center m-0">
            <div className="flex flex-col items-center justify-center mt-10">
              <main className="block xl:px-96">
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold mb-12 text-black dark:text-white">
                    <span className="text-green-primary">
                      <span className="italic">Andrej's</span> Tunes{" "}
                    </span>
                    Privacy Policy
                  </h3>

                  <h3 className="text-sm sm:text-xl font-semibold mb-12 text-black dark:text-white">
                    This Privacy Policy explains what information Andrej's Tunes
                    collects about it's users, and what we do with that
                    information. This policy applies only to analytics obtained
                    through your use of andrejs-tunes.herokuapp.com.
                  </h3>

                  <h3 className=" text-sm sm:text-xl font-semibold sm:mb-12 text-black dark:text-white">
                    Andrej's Tunes is a web application designed simply to
                    easily access and display the information supplied from the
                    Spotify Web API. By using this service, you are also bound
                    by Spotify's Privacy Policy.
                  </h3>
                </div>
              </main>
            </div>
          </div>
        </div>
        <footer className="hidden sm:block p-5 sm:p-10 text-lg text-light-text dark:text-footer-gray text-black dark:text-white">
          <div className="flex items-center justify-center my-0 mx-auto w-full m-w-full">
            <div
              className="flex flex-col sm:flex-row items-center"
              id="footer-content"
            >
              <div>
                <h3 className="block mt-4 text-xs font-semibold">
                  If you would like to get in touch with us about our privacy
                  policy, analytics or otherwise, please see below. Email:{" "}
                  <a href="mailto:aacevski@gmail.com">
                    <span className="underline">aacevski@gmail.com</span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
