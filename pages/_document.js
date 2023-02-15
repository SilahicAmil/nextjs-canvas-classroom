import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="module-modal" className=""></div>
        <div id="courses-modal" className=""></div>
        <NextScript />
      </body>
    </Html>
  );
}
