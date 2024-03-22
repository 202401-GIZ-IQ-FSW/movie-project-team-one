import React, { useState, useEffect } from "react";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function idPeopleFetch({ actor_id }) {
	const [actor, setActor] = useState([]); // Initialize as null
	const URL = `https://api.themoviedb.org/3/person/${actor_id}?api_key=${API_KEY}&language=en-US`;

	useEffect(() => {
		// Check if actor_id is available
		if (actor_id) {
			const fetchActor = async () => {
				try {
					const res = await fetch(URL);
					if (!res.ok) {
						throw new Error('Failed to fetch actor data');
					}
					const data = await res.json();
					setActor(data); // Set the entire actor object
				} catch (error) {
					console.error("Error fetching data:", error);
					setActor(null); // Reset actor state in case of error
				}
			};

			fetchActor();
		}
	}, [actor_id]); // Run the effect only when actor_id changes

	return actor;
}

export default idPeopleFetch;
