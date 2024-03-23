import React from "react";
import Link from "next/link";

export default function displayCast({ cast }) {

	return (
		<div className='w-screen flex flex-col justify-center items-center'>
			<h1>Cast</h1>
			<div className='flex w-6/12 gap-5 rounded-lg justify-center items-center overflow-scroll'>
				{cast.map((person) => (
					<div
						key={person.id}
						className='flex flex-col p-4 justify-center items-center bg-indigo-500 rounded-lg min-w-fit'
					>
						<Link
							href={{
								pathname: `/actors/actorDetails`,
								query: { id: `${person.id}` },
							}}
							passHref
						>
							
							<h3>Name : {person.name}</h3>
							<p>Character: {person.character}</p>
							<img
								className='h-20 w-20 rounded-full object-cover'
								src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
								alt={`${person.name} profile`}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
