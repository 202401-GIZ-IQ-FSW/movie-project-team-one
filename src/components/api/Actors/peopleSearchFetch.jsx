import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function PeopleSearchFetch({ searchString }) {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchPeople = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/search/person`,
					{
						params: {
							api_key: API_KEY,
							query: searchString,
						},
					}
				);
				setPeople(response.data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchPeople();
	}, [searchString]);

	return people;
}

export default PeopleSearchFetch;
