"use client";
import React, { useState } from "react";
import ListFetch from "@/components/api/movies/listFetch";
import DisplayCard from "@/components/displayCard";

export default function Home({ searchParams }) {
	const [results, setResults] = useState([]);
	const genre = searchParams.genre || "popular";
	let listName;

	switch (genre) {
		case "now_playing":
			listName = "now_playing";
			break;
		case "popular":
			listName = "popular";
			break;
		case "top_rated":
			listName = "top_rated";
			break;
		case "upcoming":
			listName = "upcoming";
			break;
		default:
			listName = "popular"; // Default to "Popular"
			break;
	}

	const fetchResults = async () => {
		try {
			const data = await ListFetch({ listName });
			setResults(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	// Call fetchResults directly when the component mounts or when the listName changes
	fetchResults();

	return (
		<div className='flex flex-wrap gap-3 w-screen'>
			<h1>{genre}</h1>
			{results.map((result) => (
				<div key={result.id}>
					<DisplayCard
						result={result}
						pathname={"movieDetails/page"}
					/>
				</div>
			))}
		</div>
	);
}
