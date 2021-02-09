import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Artist from "../components/Artist";
import Navigation from "../components/Navigation";
import queryString from "query-string";

const TOP_ARTISTS_LONG_TERM =
  "https://api.spotify.com/v1/me/top/artists?time_range=long_term";

const API_KEY =
  "BQCTsw9cfmwNklrK60VsElsaV-WqcaOG9iycYNcVADNupoBLTUM-2gv8SYRgmaY8n2OsD4X6J-6pz7x7gZWHHT-ethBJCgAxoMgQWJMKzJYeCQ0cye7jKtSjOxc71ECcdrvbEQFVISd2O5Ge9ZRGTc6I8p0a9v_iJVY9X2w60mdyy0t-Vb58M3ZBZwzssFM_1G-zER0W7oNKFQURYbZGQhZavsTMlVmtmD2g2aetpy_Rg9p3tbipyOE7vWeyVtxXYG6YdSlkFS1mIwmAywYPecYllsKrpKtWNDg";

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
            <Artist key={`${index}-${artist.name}`} artist={artist} />
          ))}
        </div>
      ) : (
        <>
          <div className="relative">
            <div className="flex flex-1 flex-col justify-center text-center h-screen">
              <Navigation></Navigation>
              <div className="flex flex-1 flex-col justify-center text-center text-light-text dark:text-dark-text">
                <div className="flex flex-col flex-1 items-center justify-center m-0">
                  <div className="flex flex-col items-center content-center">
                    <main aria-role="main" className="block">
                      <div>
                        <button
                          className="bg-green-primary rounded text-3xl p-5 font-bold text-white"
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
