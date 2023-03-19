"use client";
import { Provider } from "react-redux";
import store from "../Store/index";
import Header from "./My-mart/Header";
import Providers from "./providers";


export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
