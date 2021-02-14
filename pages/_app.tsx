import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
