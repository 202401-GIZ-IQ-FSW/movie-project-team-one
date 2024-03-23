import React from "react";
import { useRouter } from "next/router";
import idPeopleFetch from "@/components/api/Actors/idPeopleFetch";
import "../../app/globals.css";
import Layout from "@/components/Layout";

export default function actorDetails() {
	const router = useRouter();
	const { id } = router.query;
	// console.log(id);
	const actor = idPeopleFetch({ actor_id: id });
	// console.log(actor);
	return (
		<Layout>
			<div className='flex flex-col justify-between items-center gap-3 bg-green-100 rounded-lg p-3 w-[15rem]'>
				<img
					className='w-20 h-20 rounded-full object-cover'
					src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
					alt={`${actor.name} profile`}
				/>
				{actor.name}
			</div>
		</Layout>
	);
}
