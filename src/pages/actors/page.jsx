import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import "../../app/globals.css";
import DisplayActorCard from "./displayActorCard";

import peopleFetch from "@/components/api/Actors/peopleFetch";

export default function Page() {
	// Capitalized function name
	const router = useRouter();
	const { id } = router.query;
	const actors = peopleFetch();
	// console.log(actors);

	// Check if either movie or cast is loading
	if (!actors) {
		// Render loading state or return null
		return <p>Loading...</p>;
	}
	return (
		<Layout>
			<div className='flex flex-wrap gap-4 justify-center items-center'>
				{actors.map((actor) => (
					<div key={actor.id}>
						<DisplayActorCard actor={actor} />
						
					</div>
				))}
			</div>
		</Layout>
	);
}
