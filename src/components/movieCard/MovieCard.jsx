import React, { useRef, useState, useEffect } from 'react';
import "./MovieCard.css";
import { useRouter } from 'next/navigation';
import Marquee from "react-fast-marquee";
import ContentLoader from 'react-content-loader';

const UpcomingMovies = ({ data, pathname, onPathnameChange, title }) => {
  const movieContainerRef = useRef(null);
  const router = useRouter();

  const handleCardClick = (event, movie) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(`${pathname}/?id=${movie.id}`);
    onPathnameChange(`${pathname}/?id=${movie.id}`);
  };

  const visibleMovies = data;

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end mb-16 md:mb-10">
          <div className="text-center md:text-left">
            <span className="text-yellow-300">{title === "Upcoming Movies" ? "ONLINE STREAMING" : " "}</span>
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
            <rect x="0" y="10" rx="5" ry="5" width="600" height="15" />
            <rect x="0" y="40" rx="5" ry="5" width="600" height="15" />
            <rect x="0" y="70" rx="5" ry="5" width="600" height="15" />
            <rect x="0" y="100" rx="5" ry="5" width="600" height="15" />
            <rect x="0" y="130" rx="5" ry="5" width="600" height="15" />
          </ContentLoader>
        ) : (
          <div className="movie-container relative overflow-hidden" ref={movieContainerRef}>
            <div className="gradient-left absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent to-white z-10"></div>
            <div className="gradient-right absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-transparent to-white z-10"></div>
            <div className="movie-wrapper mr-4 relative z-1">
              <Marquee
                speed={50}
                loop={0}
                pauseOnHover
              >
                {visibleMovies.map((movie, index) => (
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
              </Marquee>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default UpcomingMovies;
