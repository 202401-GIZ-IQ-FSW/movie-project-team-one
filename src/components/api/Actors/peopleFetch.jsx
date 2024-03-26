import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "258db8ec4984148dcc9558ed97d94f6a";

function usePeopleFetch() {
    const [people, setPeople] = useState([]);
    const link = `https://api.themoviedb.org/3/person/popular`;

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get(link, {
                    params: {
                        api_key: API_KEY,
                        language: "en-US",
                        page: 1,
                    },
                });
                setPeople(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPeople();
    }, []);

    return people;
}

export default usePeopleFetch;
