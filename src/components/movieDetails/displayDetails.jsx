import React from "react";

export default function displayDetails({ movie }) {
	return (
		<div className='w-screen flex flex-col justify-center items-center'>
			<h1>Movie Details</h1>
			<h2>Title {movie.original_title}</h2>
			<div>
				<img
					className='h-40 w-40 rounded-full'
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt={movie.original_title}
				/>
			</div>
			<p>OverView : {movie.overview}</p>
		</div>
	);
}
