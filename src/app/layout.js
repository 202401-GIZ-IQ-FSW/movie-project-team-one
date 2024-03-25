import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "MovieZone",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<main className="mx-auto">
					{children}
				</main>
				<Footer/>
			</body>
		</html>
	);
}
