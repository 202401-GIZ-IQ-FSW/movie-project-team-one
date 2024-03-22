import React, { useState, useEffect } from "react";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function peopleFetch() {
    const [people, setPeople] = useState([]);
    const link = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;

	useEffect(() => {
		const fetchPeople = async () => {
			try {
                const res = await fetch(link);
				const data = await res.json();
				setPeople(data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchPeople();
	}, []); // Run the effect only once when the component mounts

	return people;
}

export default peopleFetch;
