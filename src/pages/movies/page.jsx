import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ListFetch from "@/components/api/movies/listFetch";
import DisplayCard from "@/components/movieDetails/displayCard";

import Layout from "@/components/Layout";
import "../../app/globals.css";

export default function Movies() {
	const [results, setResults] = useState([]);
	const searchParams = useSearchParams();
	const genre = searchParams.get("genre");

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
	if (listName) {
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
	}

	return (
		<Layout>
			<div className='flex flex-wrap gap-3 w-screen'>
				<h1>{genre}</h1>
				{results.map((result) => (
					<div key={result.id}>
						<DisplayCard
							result={result}
							pathname={"/movieDetails/page"}
						/>
					</div>
				))}
			</div>{" "}
		</Layout>
	);
}
