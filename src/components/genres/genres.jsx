import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import genreFetch from "@/components/api/movies/genreFetch";
import DisplayCard from "@/components/movieDetails/displayCard";

function Genres() {
	const router = useRouter();
	const { genreId } = router.query;

	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const extractedGenreId = genreId
		? genreId.split("=")[1]
		: null;

	console.log("Id", extractedGenreId);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				// Fetch movies based on the genreId from the URL
				const fetchedMovies = await genreFetch({
					id: extractedGenreId,
				});
				setMovies(fetchedMovies);
				console.log(movies, "movies");
			} catch (error) {
				console.error("Error fetching movies:", error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		if (extractedGenreId) {
			fetchData();
		}
	}, [extractedGenreId]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<div className='flex flex-wrap gap-3 w-screen'>
				<h1>Movies for Genre ID: {extractedGenreId}</h1>
				{movies.map((movie) => (
					<div key={movie.id}>
						<DisplayCard
							result={movie}
							pathname={"/movieDetails/page"}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Genres;
