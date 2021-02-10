import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Artist from "../components/Artist";
import Navigation from "../components/Navigation";
import queryString from "query-string";
import { LandingPage } from "../components/LandingPage";

const TOP_ARTISTS_LONG_TERM =
  "https://api.spotify.com/v1/me/top/artists?time_range=long_term";

export default function Home({}: any) {
  const [artists, setArtists] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) return;
    if (accessToken == "undefined") return;

    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.display_name);
      });

    fetch(TOP_ARTISTS_LONG_TERM, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        setArtists(jsonResponse.items);
      });
  }, []);

  return (
    <>
      {user ? (
        <div className="relative flex flex-wrap justify-center transition duration-500 bg-background-light-mode dark:bg-background-dark-mode">
          <Navigation></Navigation>
          {artists.map((artist, index) => (
            <Artist
              key={`${index}-${artist.name}-${artist.images[0].url}`}
              artist={artist}
              index={++index}
            />
          ))}
        </div>
      ) : (
        <>
          <LandingPage />
        </>
      )}
    </>
  );
}
