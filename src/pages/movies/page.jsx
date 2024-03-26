import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ListFetch from "@/components/api/movies/listFetch";
import MoviesCard from "@/components/moviesCard/MoviesCard";
import Layout from "@/components/Layout";
import "../../app/globals.css";

export default function Movies() {
	const [results, setResults] = useState([]);
	const searchParams = useSearchParams();
	const list = searchParams.get("list");

	let listName;

	switch (list) {
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
			<h1 className="text-center text-lg font-bold mt-2">{list}</h1>
				<div className='flex justify-center items-center mb-10'>
					{/* <h1 style={{ fontSize: "1.4rem"}}>{list}</h1> */}
					<MoviesCard
						pathname={"/movieDetails/page"}
						data={results}
						title=''
					/>
				</div>
		</Layout>
	);
}
