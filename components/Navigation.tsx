import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface Props {
  location: any;
}

export default function Navigation({}: any) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const icon =
    theme === "light" ? (
      <MoonIcon
        w={40}
        h={40}
        onClick={switchTheme}
        className="cursor-pointer w-8 h-8 active:outline-none blog-theme-switcher flex flex-row tooltip-handle items-center px-1 md:px-2 py-2 mx-1 font-semibold rounded-full transition ease-in-out duration-100 hover:bg-black-translucent"
      />
    ) : (
      <SunIcon
        w={40}
        h={40}
        onClick={switchTheme}
        className="cursor-pointer w-8 h-8 active:outline-none blog-theme-switcher flex flex-row tooltip-handle items-center px-1 md:px-2 py-2 mx-1 font-semibold rounded-full transition ease-in-out duration-100 hover:bg-black-translucent"
      />
    );

  const logo =
    theme === "light" ? (
      <img
        src="https://i.imgur.com/ji1grnd.png"
        className="transition-all duration-300 filter-decolorize hover:filter-none h-10"
      ></img>
    ) : (
      <img
        src="https://svgshare.com/i/Tta.svg"
        className="transition-all duration-300 filter-decolorize hover:filter-none h-10 "
      ></img>
    );

  return (
    <div className="top-0 w-screen bg-white dark:bg-green-primary text-black dark:text-white text-lg transition duration-1000">
      <div className="mx-auto z-50 container ">
        <div className="flex items-center justify-around p-3">
          <a className="fadein-colors font-body" href="/" id="header">
            {logo}
          </a>

          <div className="flex items-center justify-end font-semibold">
            <a className="fadein-colors font-body hover:text-light-pink hidden sm:block">
              About
            </a>

            <p className="fadein-colors font-body ml-5 mr-5 hidden sm:block">
              |
            </p>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}
