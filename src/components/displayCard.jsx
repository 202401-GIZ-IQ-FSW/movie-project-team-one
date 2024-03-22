import Link from "next/link";

export default function MovieCard({ result,pathname }) {
	return (
		<div className='bg-green-800 flex flex-col w-40 justify-center items-center'>
			<Link
				href={{
					pathname: `${pathname}`,
					query: { id: `${result.id}` },
				}}
			>
				<h1>{result.id}</h1>
				<img
					className='h-full w-full'
					src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
					alt={result.original_title}
				/>
				<h2>{result.original_title}</h2>
				<p>{result.overview}</p>
			</Link>
		</div>
	);
}
