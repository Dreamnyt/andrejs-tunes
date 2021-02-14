import React from "react";

const Track = ({ track, index }) => {
  return (
    <div className="mt-8 sm:w-movieCard bg-white text-black dark dark:text-white transition duration-500 dark:bg-gray-primary m-4 relative overflow-hidden rounded-sm shadow-lg ">
      {/* <div className="flex justify-center pt-4 pl-4 pb-4 pr-4 tracking-wider overflow-hidden"> */}
      <img
        src={track.album.images[0].url}
        alt={track.name}
        className="object-cover h-96 w-full rounded-sm"
      ></img>
      {/* </div> */}
      <div className="text-textInfo flex items-center justify-between pt-4 pl-4 pb-4 pr-4 tracking-wider">
        <h4 className="text-lg font-semibold m-0">{track.name}</h4>
        <span
          className={
            "bg-span-light rounded-sm font-bold pt-1 pl-2 pb-1 pr-2 text-lg text-white dark:text-white"
          }
        >
          {index}
        </span>
      </div>
    </div>
  );
};

export default Track;
