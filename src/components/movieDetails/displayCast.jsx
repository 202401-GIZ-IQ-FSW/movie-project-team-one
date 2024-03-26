import Link from "next/link";
import Image from "next/image";
export default function DisplayCast({ cast }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cast</h1>
      <div className="overflow-x-auto whitespace-nowrap">
        {cast.map((person) => (
          <div key={person.id} className="inline-block mr-8">
            <Link
              href={{
                pathname: "/actors/actorDetails",
                query: { id: person.id },
              }}
            >
              <div className="block w-32">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                  alt={`${person.name}`}
                  profile
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold mb-2">{person.name}</h3>
                  <div className="flex flex-col ">
                    <p>Character:</p>
                    <p>{person.character}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
