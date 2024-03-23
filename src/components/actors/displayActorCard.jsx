import Link from "next/link";

export default function DisplayActorCard({ actor }) {
	return (
		<div className='justify-center items-center'>
			<Link
				href={{
					pathname: `/actors/actorDetails`,
					query: { id: `${actor.id}` },
				}}
				replace // I add the replace prop to prevent the href from being appended to the current URL
			>
				<div className='flex flex-col justify-between items-center gap-3 bg-green-100 rounded-lg p-3 w-[15rem]'>
					<img
						className='w-20 h-20 rounded-full object-cover'
						src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
						alt={`${actor.name} profile`}
					/>
					{actor.name}
				</div>
			</Link>
		</div>
	);
}
