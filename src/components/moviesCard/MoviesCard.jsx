import React, { useRef } from 'react';
import "./MoviesCard.css";
import { useRouter } from 'next/navigation';
import Marquee from "react-fast-marquee";
import ContentLoader from 'react-content-loader';

const MoviesCard = ({ data, pathname, title }) => {
  const movieContainerRef = useRef(null);
  const router = useRouter();

  const handleCardClick = (event, movie) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(`${pathname}/?id=${movie.id}`);
  };

  return (
    <section className="flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end mb-16 md:mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>
        {data.length === 0 ? (
          <ContentLoader
            speed={2}
            width={600}
            height={200}
            viewBox="0 0 600 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="50" y="20" rx="10" ry="10" width="160" height="180" />
            <rect x="220" y="20" rx="10" ry="10" width="160" height="180" />
            <rect x="390" y="20" rx="10" ry="10" width="160" height="180" />
            <rect x="560" y="20" rx="10" ry="10" width="160" height="180" />
          </ContentLoader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((movie, index) => (
              <div key={index} className="movie-card">
                <a href="#" onClick={(e) => handleCardClick(e, movie)}>
                  <div className="card-content">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt=""/>
                    <div className="movie-details">
                      <h5 className="title">{movie.title}</h5>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MoviesCard;
