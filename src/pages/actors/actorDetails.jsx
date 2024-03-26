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
			<div className='flex justify-center items-center mt-20 mb-20 '>
				<div className='bg-gray-100 rounded-lg p-8 shadow-md max-w-md text-center h-fit'>
					<img
						className='object-cover mx-auto mb-4 h-56 w-full rounded-lg'
						src={
							actor.profile_path
								? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
								: actor.gender === 1
								? "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1711409090~exp=1711412690~hmac=faa51a239ec3af2843e756de28b06e493174b7633faaad56ed732b428d9202b3&w=1380"
								: "https://img.freepik.com/free-vector/illustration-businesswoman_53876-5857.jpg?t=st=1711409052~exp=1711412652~hmac=82c4dd83e7e3965d65b6461a0fa22c7c8ba4935881ae5496a7cf499eef0c68f0&w=1380"
						}
						alt={`${actor.name} profile`}
					/>
					<h2 className='text-2xl font-semibold mb-2'>
						{actor.name}
					</h2>
					<p className='text-gray-700'>
						{actor.place_of_birth}
					</p>
					{actor.known_for_department && (
						<p className='text-gray-700'>
							{actor.known_for_department}
						</p>
					)}
					{actor.imdb_id === "nm15022220" && (
						<p className='text-red-500 font-bold'>
							Special design for Mayukh Mukherjee
						</p>
					)}
				</div>
			</div>
		</Layout>
	);
}
