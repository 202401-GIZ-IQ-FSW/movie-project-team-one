import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./common/Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer/>
		</div>
	);
};

export default Layout;
