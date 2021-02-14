import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Artist from "../components/Artist";
import Navigation from "../components/Navigation";
import queryString from "query-string";
import ReactDOM from "react-dom";
import Track from "../components/Track";
import Select, { components } from "react-select";

export default function LoggedIn({}: any) {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [user, setUser] = useState([]);

  const renderType = (event) => {
    let typePrefrence = (document.getElementById(
      "preference"
    ) as HTMLInputElement).value;

    if (typePrefrence === "artists") {
      const renderArtists = artists.map((artist, index) => (
        <Artist
          key={`${index}-${artist.name}-${artist.images[0].url}-${artist.external_urls.spotify}`}
          artist={artist}
          index={++index}
        />
      ));

      ReactDOM.render(renderArtists, document.getElementById("renderArea"));
    } else if (typePrefrence === "tracks") {
      const renderTracks = tracks.map((track, index) => (
        <Track
          key={`${index}-${track.name}-${track.album.images[0].url}`}
          track={track}
          index={++index}
        />
      ));
      ReactDOM.render(renderTracks, document.getElementById("renderArea"));
    }
  };

  const handleChangePreference = () => {
    let preference = (document.getElementById("preference") as HTMLInputElement)
      .value;
    return preference;
  };

  const handleChangeTimeframe = () => {
    let timeframe = (document.getElementById("timeframe") as HTMLInputElement)
      .value;
    return timeframe;
  };

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) return;
    if (accessToken == "undefined") return;

    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        setUser(jsonResponse.display_name);
      });
  }, []);

  const handleChange = () => {
    let typePrefrence = handleChangePreference();
    let timeFrame = handleChangeTimeframe();

    if (typePrefrence === "" || timeFrame === "") return;

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) return;
    if (accessToken == "undefined") return;

    let LINK_URL =
      "https://api.spotify.com/v1/me/top/" +
      typePrefrence +
      "?time_range=" +
      timeFrame;

    if (typePrefrence === "artists") {
      fetch(LINK_URL, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          setArtists(jsonResponse.items);
        });
    } else {
      fetch(LINK_URL, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          setTracks(jsonResponse.items);
        });
    }
  };

  return (
    <>
      <div className="relative flex flex-wrap justify-center transition duration-500 bg-background-light-mode dark:bg-background-dark-mode">
        <Navigation></Navigation>

        <div className="w-screen  text-black dark:text-white text-lg transition duration-1000 ">
          <div className="mx-auto z-50 container ">
            <div className="flex flex-col items-center justify-center p-3">
              <div className="flex flex-row items-center justify-center font-semibold mb-5">
                <select
                  id="preference"
                  onChange={handleChange}
                  style={{ borderColor: "#1db954" }}
                  className="bg-transparent text-black dark:text-white border-2 border-gray-primary hover:border-green-primary rounded-full px-4 "
                >
                  <option
                    disabled
                    selected
                    className="bg-background-light-mode dark:bg-background-dark-mode font-bold"
                  >
                    Select Artist/Tracks
                  </option>
                  <option
                    value="artists"
                    className="bg-background-light-mode dark:bg-background-dark-mode"
                  >
                    Artist
                  </option>
                  <option
                    value="tracks"
                    className="bg-background-light-mode dark:bg-background-dark-mode"
                  >
                    Tracks
                  </option>
                </select>
              </div>
              <div className="flex flex-row items-center justify-center font-semibold mb-5 ">
                <select
                  className="bg-transparent text-black dark:text-white border-2 border-gray-primary hover:border-green-primary rounded-full px-4"
                  id="timeframe"
                  onChange={handleChange}
                  style={{ borderColor: "#1db954" }}
                >
                  <option
                    disabled
                    selected
                    className="bg-background-light-mode dark:bg-background-dark-mode font-bold"
                  >
                    Select Timeframe
                  </option>
                  <option
                    value="short_term"
                    className="bg-background-light-mode dark:bg-background-dark-mode"
                  >
                    Short Term
                  </option>
                  <option
                    value="medium_term"
                    className="bg-background-light-mode dark:bg-background-dark-mode"
                  >
                    Medium Term
                  </option>
                  <option
                    value="long_term"
                    className="bg-background-light-mode dark:bg-background-dark-mode"
                  >
                    Long Term
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-green-primary rounded-3xl text-lg sm:text-md py-0.5 px-20 sm:py-1.5 sm:px-24 font-bold text-white"
          onClick={renderType}
        >
          Generate
        </button>
        <div
          id="renderArea"
          className="relative flex flex-wrap justify-center transition duration-500 bg-background-light-mode dark:bg-background-dark-mode"
        ></div>
      </div>
    </>
  );
}
