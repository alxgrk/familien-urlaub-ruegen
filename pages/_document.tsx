import { Head, Html, Main, NextScript } from "next/document";

import { lora } from "../lib/fonts";

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <body className={lora.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
