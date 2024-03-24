import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function idPeopleFetch({ actor_id }) {
	const [actor, setActor] = useState([]);
	const URL = `https://api.themoviedb.org/3/person/${actor_id}`;

	useEffect(() => {
		// Check if actor_id is available
		if (actor_id) {
			const fetchActor = async () => {
				try {
					const response = await axios.get(URL, {
						params: {
							api_key: API_KEY,
							language: "en-US",
						},
					});
					setActor(response.data); // Set the entire actor object
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
