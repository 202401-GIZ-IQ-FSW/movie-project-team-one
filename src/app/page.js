"use client";
import React, { useState, useEffect, useCallback } from "react";
import ListFetch from "@/components/api/movies/listFetch";
import DisplayCard from "@/components/movieDetails/displayCard";
import Marquee from "react-fast-marquee";
import UpcomingMovies from "@/components/upcomingMovies/UpcomingMovies";

export default function Home() {
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);
	const [nowPlaying, setNowPlaying] = useState([]);
	
	const handlePathnameChange = useCallback((newPathname) => {
		console.log("hello",newPathname)
	}, []);

	// const genre = searchParams.genre || "popular";

	const fetchMovies = async () => {
		try {
			const popularPromise = ListFetch({
				listName: "popular",
			});
			const topRatedPromise = ListFetch({
				listName: "top_rated",
			});

			const upcomingPromise = ListFetch({
				listName: "upcoming",
			});

			const nowPlayingPromise = ListFetch({
				listName: "now_playing",
			});
			const [popular_, topRated_, upcoming_, nowPlaying_] =
				await Promise.all([
					popularPromise,
					topRatedPromise,
					upcomingPromise,
					nowPlayingPromise,
				]);

			setPopular(popular_);
			setTopRated(topRated_);
			setUpcoming(upcoming_);
			setNowPlaying(nowPlaying_);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	fetchMovies();

	return (
		<div className='flex flex-col'>
			<div className="md:ml-36 md:mr-36 mb-24 text-center">
				<UpcomingMovies pathname={"/movieDetails/page"} onPathnameChange={handlePathnameChange} data={upcoming} title="Upcoming Movies"/>
			</div>
			<div className="md:ml-36 md:mr-36 mb-24 text-center">
				<UpcomingMovies pathname={"/movieDetails/page"} onPathnameChange={handlePathnameChange} data={nowPlaying} title="Now Playing"/>
			</div>
			<div className="md:ml-36 md:mr-36 mb-24 text-center">
				<UpcomingMovies pathname={"/movieDetails/page"} onPathnameChange={handlePathnameChange} data={popular} title="Popular"/>
			</div>
			<div className="md:ml-36 md:mr-36 mb-24 text-center">
				<UpcomingMovies pathname={"/movieDetails/page"} onPathnameChange={handlePathnameChange} data={topRated} title="Top Rated"/>
			</div>
		</div>
	);
}
