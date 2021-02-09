import React from "react";

const Artist = ({ artist }) => {
  return (
    <div
      className="mt-8 w-movieCard bg-white text-black dark dark:text-white transition duration-500 dark:bg-gray-primary m-4 relative overflow-hidden rounded-sm shadow-lg"
      id="movieCard"
    >
      <img
        src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515396_10843.jpg"
        className="w-full"
      ></img>
      <div className="text-textInfo flex items-center justify-between pt-4 pl-4 pb-4 pr-4 tracking-wider">
        <h4 className="text-lg font-semibold m-0">{artist.name}</h4>
        <span
          className={
            "bg-span-light rounded-sm font-bold pt-1 pl-2 pb-1 pr-2 text-lg text-white dark:text-white"
          }
        >
          1
        </span>
      </div>
    </div>
  );
};

export default Artist;
