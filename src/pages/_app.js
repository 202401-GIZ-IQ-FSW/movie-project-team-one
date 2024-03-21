import React from "react";
import { Toaster } from "react-hot-toast";
// import { Layout } from "@/components";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-tailwind/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import "../styles/Layout.css";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider>
        {/* <Layout> */}
          <Toaster />
          <ToastContainer />
          <SpeedInsights />
          <Component {...pageProps} />
        {/* </Layout> */}
      </ThemeProvider>
  );
}
