import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

const SearchInput = () => {
	const [searchString, setSearchString] = useState("");
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

		if (searchString.trim() !== "") {
			fetchPeople();
		} else {
			setPeople([]); // Clear the results if search string is empty
		}
	}, [searchString]);

	const handleInputChange = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<div>
			<input
				type='text'
				value={searchString}
				onChange={handleInputChange}
				placeholder='Search for people...'
			/>
			<ul>
				{people.map((person) => (
					<li key={person.id}>{person.name}</li>
				))}
			</ul>
		</div>
	);
};

export default SearchInput;
