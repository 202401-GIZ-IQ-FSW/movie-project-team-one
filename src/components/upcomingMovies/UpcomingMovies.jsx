import React from 'react';
import Image from "next/image";
// import "./UpcomingMovies.css";

const UpcomingMovies = ({data}) => {
  return (
    <section className="ucm-area ucm-bg" data-background="img/bg/ucm_bg.jpg">
      <div className="ucm-bg-shape" data-background="img/bg/ucm_bg_shape.png"></div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end mb-16 md:mb-10">
          <div className="text-center md:text-left">
            <span className="text-yellow-300">ONLINE STREAMING</span>
            <h2 className="text-2xl font-bold">Upcoming Movies</h2>
          </div>
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="movie-item">
                  <div className="movie-poster">
                    <a href="movie-details.html"><Image src="/img/poster/ucm_poster01.jpg" width={300} height={160} alt="" /></a>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title"><a href="movie-details.html">Women's Day</a></h5>
                      <span className="date">2021</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li><span className="quality">hd</span></li>
                        <li>
                          <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                          <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="movie-poster">
                    <a href="movie-details.html"><Image src="/img/poster/ucm_poster01.jpg" width={300} height={160} alt="" /></a>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title"><a href="movie-details.html">Women's Day</a></h5>
                      <span className="date">2021</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li><span className="quality">hd</span></li>
                        <li>
                          <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                          <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="movie-poster">
                    <a href="movie-details.html"><Image src="/img/poster/ucm_poster01.jpg" width={300} height={160} alt="" /></a>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title"><a href="movie-details.html">Women's Day</a></h5>
                      <span className="date">2021</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li><span className="quality">hd</span></li>
                        <li>
                          <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                          <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="movie-poster">
                    <a href="movie-details.html"><Image src="/img/poster/ucm_poster01.jpg" width={300} height={160} alt="" /></a>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title"><a href="movie-details.html">Women's Day</a></h5>
                      <span className="date">2021</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li><span className="quality">hd</span></li>
                        <li>
                          <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                          <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingMovies;
