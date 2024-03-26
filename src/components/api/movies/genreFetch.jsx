import axios from "axios";

const genreFetch = async ({ id }) => {
	const apiKey = "258db8ec4984148dcc9558ed97d94f6a";

	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/discover/movie`,
			{
				params: {
					api_key: apiKey,
					with_genres: id,
				},
			}
		);

		const movies = response.data.results;
		// console.log(movies, "movies fetch", "id", id);
		return movies;
	} catch (error) {
		console.error("Error fetching movies:", error);
		return [];
	}
};

export default genreFetch;
