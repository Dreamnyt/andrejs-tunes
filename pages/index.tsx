import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import queryString from "query-string";
import { LandingPage } from "../components/LandingPage";
import LoggedIn from "../components/LoggedIn";

export default function Home({}: any) {
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
      .then((jsonResponse) => {
        setUser(jsonResponse.display_name);
      });
  }, []);

  return <>{user ? <LoggedIn /> : <LandingPage />}</>;
}
