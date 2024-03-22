import { useState, useEffect } from "react";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function castFetch({ movie_id }) {
	const [cast, setCast] = useState([]);

	useEffect(() => {
		if (movie_id) {
			const fetchCast = async () => {
				try {
					const res = await fetch(
						`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`
					);
					const data = await res.json();
					setCast(data.cast); // Set the cast array
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
