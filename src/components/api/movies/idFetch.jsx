import React, { useState, useEffect } from "react";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function IdFetch({ movie_id }) {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		// Check if movie_id is available
		if (movie_id) {
			const fetchMovie = async () => {
				try {
					const res = await fetch(
						`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&page=1`
					);
					const data = await res.json();
					setMovie(data); // Set the entire movie object
				} catch (error) {
					console.error("MovieError fetching data:", error);
				}
			};

			fetchMovie();
		}
	}, [movie_id]); // Run the effect only when movie_id changes

	return movie;
}

export default IdFetch;
