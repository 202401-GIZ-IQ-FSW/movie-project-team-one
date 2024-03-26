import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function ListFetch({ listName }) {
	const [results, setResults] = useState([]);

	useEffect(() => {
		const fetchList = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${listName}`,
					{
						params: {
							api_key: API_KEY,
							language: "en-US",
							page: 1,
						},
					}
				);
				setResults(response.data.results);
				console.log(response.data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchList();
	}, [listName]);

	return results;
}

export default ListFetch;
