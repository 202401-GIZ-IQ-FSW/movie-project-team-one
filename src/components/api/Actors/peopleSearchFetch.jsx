import React, { useState, useEffect } from "react";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function PeopleSearchFetch({ searchString }) {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchPeople = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${searchString}`
				);
				const data = await response.json();
				setPeople(data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchPeople();
	}, [searchString]);

	return (people);
}

export default PeopleSearchFetch;
