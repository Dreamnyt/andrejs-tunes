import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="../public/favicon.ico" />
        </Head>
        <body className="transition duration-500 bg-background-light-mode dark:bg-background-dark-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
