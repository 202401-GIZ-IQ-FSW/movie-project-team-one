import { useRouter } from "next/router";
import IdFetch from "@/components/api/movies/idFetch";
import castFetch from "@/components/api/movies/castFetch";
import "../../app/globals.css";
import Layout from "@/components/Layout";
import DisplayDetails from "../../components/movieDetails/displayDetails";
import DisplayCast from "../../components/movieDetails/displayCast";

export default function MovieDetails() {
	const router = useRouter();
	const { id } = router.query;

	// Fetch movie details using the id
	const movie = IdFetch({ movie_id: id });
	const cast = castFetch({ movie_id: id });

	// Check if either movie or cast is loading
	if (!movie || !cast) {
		// Render loading state or return null
		return <p>Loading...</p>;
	}

	return (
		<Layout>
			<div className='flex flex-col justify-center items-center bg-pink-100 p-20'>
				<p>Movie ID: {id}</p>
				<DisplayDetails movie={movie} />
				<DisplayCast cast={cast} />
			</div>
		</Layout>
	);
}
