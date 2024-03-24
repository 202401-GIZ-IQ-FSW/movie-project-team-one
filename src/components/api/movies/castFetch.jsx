import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function castFetch({ movie_id }) {
	const [cast, setCast] = useState([]);

	useEffect(() => {
		if (movie_id) {
			const fetchCast = async () => {
				try {
					const response = await axios.get(
						`https://api.themoviedb.org/3/movie/${movie_id}/credits`,
						{
							params: {
								api_key: API_KEY,
								language: "en-US",
								page: 1,
							},
						}
					);
					setCast(response.data.cast); // Set the cast array from response data
				} catch (error) {
					console.error("Error fetching cast data:", error);
				}
			};

			fetchCast();
		}
	}, [movie_id]);

	return cast;
}

export default castFetch;
