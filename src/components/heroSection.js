import React, { useState, useEffect } from "react";
import "../app/globals.css";
import FetchMovie from "@/components/api/movies/idFetch";

function HeroSection() {
	const [movieData, setMovieData] = useState("");

	const fetchData = async () => {
		try {
			const data = await FetchMovie({
				movie_id: 940551,
			});
			setMovieData(data);
			console.log(movieData);
		} catch (error) {
			console.error("Error fetching movie data:", error);
		}
	};

	fetchData();

	console.log("MDr", movieData);
	return (
		<div className='w-screen h-[500px]'>
			{movieData && (
				<div className='w-full h-full relative flex justify-center items-center'>
					<img
						src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
						className='absolute inset-0 w-full h-full object-cover opacity-50'
						alt=''
					/>
					<div className='absolute bottom-12'>
						<h1 className='text-center md:text-4xl font-mono text-sm font-extrabold text-black'>
							Discover Your Favorite Movies
						</h1>
					</div>
				</div>
			)}
		</div>
	);
}

export default HeroSection;
