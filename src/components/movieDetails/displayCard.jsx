import Link from "next/link";

export default function MovieCard({ result, pathname }) {
  return (
    <div className="bg-indigo-300 flex flex-col w-40 justify-start items-center p-2 rounded-md ml-6">
      <Link
        href={{
          pathname: pathname,
          query: { id: result.id },
        }}
      >
        <h1>{result.id}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
          alt={result.original_title}
        />
        <h2 className=" flex justify-center items-center text-center h-20">
          {result.original_title}
        </h2>
      </Link>
    </div>
  );
}
