import axios from "axios";

const fetchGenres = async () => {
	const apiKey = "258db8ec4984148dcc9558ed97d94f6a";
	const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`;

	try {
		const response = await axios.get(url);
		const genres = response.data.genres;
		return genres;
	} catch (error) {
		console.error("Error fetching genres:", error);
		return [];
	}
};

export default fetchGenres;
