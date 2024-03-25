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
								src={
									person.profile_path
										? `https://image.tmdb.org/t/p/original/${person.profile_path}`
										: person.gender === 1
										? "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1711409090~exp=1711412690~hmac=faa51a239ec3af2843e756de28b06e493174b7633faaad56ed732b428d9202b3&w=1380"
										: "https://img.freepik.com/free-vector/illustration-businesswoman_53876-5857.jpg?t=st=1711409052~exp=1711412652~hmac=82c4dd83e7e3965d65b6461a0fa22c7c8ba4935881ae5496a7cf499eef0c68f0&w=1380"
								}
								alt={`${person.name} profile`}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
