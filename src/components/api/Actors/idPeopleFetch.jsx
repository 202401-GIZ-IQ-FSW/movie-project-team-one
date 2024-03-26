import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function useIdPeopleFetch({ actor_id }) {
    const [actor, setActor] = useState([]);
    const URL = `https://api.themoviedb.org/3/person/${actor_id}`;

    useEffect(() => {
        if (actor_id) {
            const fetchActor = async () => {
                try {
                    const response = await axios.get(URL, {
                        params: {
                            api_key: API_KEY,
                            language: "en-US",
                        },
                    });
                    setActor(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setActor(null);
                }
            };

            fetchActor();
        }
    }, [actor_id]);

    return actor;
}

export default useIdPeopleFetch;
