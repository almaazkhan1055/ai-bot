"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./globals.css";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
