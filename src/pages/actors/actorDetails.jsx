import React from "react";
import { useRouter } from "next/router";
import idPeopleFetch from "@/components/api/Actors/idPeopleFetch";
import "../../app/globals.css";
import Layout from "@/components/Layout";
import { alert } from "@material-tailwind/react";

export default function actorDetails() {
	const router = useRouter();
	const { id } = router.query;
	// console.log(id);
	const actor = idPeopleFetch({ actor_id: id });
	console.log("actor", actor);
	return (
		<Layout>
			<div className='flex justify-center items-center mt-20 mb-20'>
				<div className='bg-gray-100 rounded-lg p-8 shadow-md max-w-md text-center'>
					<img
					className='w-32 h-32 rounded-full object-cover mx-auto mb-4'
					src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
					alt={`${actor.name} profile`}
					/>
					<h2 className='text-2xl font-semibold mb-2'>{actor.name}</h2>
					<p className='text-gray-700'>{actor.place_of_birth}</p>
					{actor.known_for_department && (
					<p className='text-gray-700'>{actor.known_for_department}</p>
					)}
					{actor.imdb_id === "nm15022220" && (
					<p className='text-red-500 font-bold'>Special design for Mayukh Mukherjee</p>
					)}
				</div>
			</div>
		</Layout>
	);
}
