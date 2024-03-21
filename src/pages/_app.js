import React from "react";
import { Toaster } from "react-hot-toast";
// import { Layout } from "@/components";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-tailwind/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider } from "react-redux";
// import "../app/globals.css";
import "../styles/Layout.css";
import { store } from "@/globalRedux/store";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ThemeProvider>
				{/* <Layout> */}
				<Toaster />
				<ToastContainer />
				<SpeedInsights />
				<Component {...pageProps} />
				{/* </Layout> */}
			</ThemeProvider>
		</Provider>
	);
}
