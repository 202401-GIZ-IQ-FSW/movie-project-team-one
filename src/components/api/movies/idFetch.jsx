import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function IdFetch({ movie_id }) {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		// Check if movie_id is available
		if (movie_id) {
			const fetchMovie = async () => {
				try {
					const response = await axios.get(
						`https://api.themoviedb.org/3/movie/${movie_id}`,
						{
							params: {
								api_key: API_KEY,
								language: "en-US",
								page: 1,
							},
						}
					);
					setMovie(response.data); // Set the entire movie object
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
