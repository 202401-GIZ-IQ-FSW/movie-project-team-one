"use client";
import React, { useState, useEffect } from "react";
import ListFetch from "@/components/api/movies/listFetch";
import DisplayCard from "@/components/movieDetails/displayCard";
import Marquee from "react-fast-marquee";
import UpcomingMovies from "@/components/upcomingMovies/UpcomingMovies";

export default function Home() {
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);
	const [nowPlaying, setNowPlaying] = useState([]);

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
		<div className='flex flex-col gap-3 w-screen '>
			<h1 className='pt-10 text-center font-bold'>
				Now Playing
			</h1>
			<div className='bg-blue-300 flex justify-center items-center p-4'>
				<Marquee
					speed={50}
					loop={0}
					pauseOnHover
				>
					{nowPlaying.map((result) => (
						<div key={result.id}>
							<DisplayCard
								result={result}
								pathname={"/movieDetails/page"}
							/>
						</div>
					))}
				</Marquee>
			</div>

			<h1 className='pt-10 text-center font-bold'>
				Popular
			</h1>
			<div className='flex overflow-x-auto gap-2 bg-orange-300 p-3'>
				<Marquee
					speed={50}
					loop={0}
					pauseOnHover
				>
					{popular.map((result) => (
						<div key={result.id}>
							<DisplayCard
								result={result}
								pathname={"/movieDetails/page"}
							/>
						</div>
					))}
				</Marquee>
			</div>

			<h1 className='pt-10 text-center font-bold'>
				Top Rated
			</h1>
			<div className='flex overflow-x-auto gap-2 bg-pink-300 p-3'>
				<Marquee
					speed={50}
					loop={0}
					pauseOnHover
				>
					{topRated.map((result) => (
						<div key={result.id}>
							<DisplayCard
								result={result}
								pathname={"/movieDetails/page"}
							/>
						</div>
					))}
				</Marquee>
			</div>

			<h1 className='pt-10 text-center font-bold'>
				Upcoming
			</h1>
			<div className='flex overflow-x-auto gap-2 bg-yellow-300 p-3'>
				<Marquee
					speed={50}
					loop={0}
					pauseOnHover
				>
					{upcoming.map((result) => (
						<div key={result.id}>
							<DisplayCard
								result={result}
								pathname={"/movieDetails/page"}
							/>
						</div>
					))}
				</Marquee>
			</div>
			{/* <UpcomingMovies /> */}
		</div>
	);
}
