import React, { useState, useEffect } from "react";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function ListFetch({ listName }) {
	const [results, setResults] = useState([]);

	useEffect(() => {
			const fetchList = async () => {
				try {
					const res = await fetch(
						`https://api.themoviedb.org/3/movie/${listName}?api_key=${API_KEY}&language=en-US&page=1`
					);
					const data = await res.json();
					setResults(data.results);
					console.log(results);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			};
	
			fetchList();
	}, [listName]);

	return results;
}

export default ListFetch;
