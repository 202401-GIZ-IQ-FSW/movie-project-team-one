export default function displayDetails({ movie }) {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 max-w-6xl">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-semibold mb-2">
            Title: {movie.original_title}
          </p>
          <p className="text-lg mb-2">Rating: {movie.vote_average}</p>
          <p className="text-lg mb-2">Release Date: {movie.release_date}</p>
          <p className="text-lg mb-2">Runtime: {movie.runtime} mins</p>
          <p className="text-lg mb-2">Tagline: {movie.tagline}</p>
          <p className="text-lg">Overview: {movie.overview}</p>
        </div>
        <div className="relative w-80 lg:w-96 h-auto aspect-w-2 aspect-h-3">
          <img
            className="rounded-lg object-cover h-full w-full shadow"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      </div>
    </div>
  );
}
