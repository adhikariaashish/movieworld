import React from "react";
import Image from "next/image";
import { FiClock, FiDollarSign, FiStar } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movie = await res.json();
  const voteavg = movie.vote_average;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row sm:flex items-center content-center max-w-6xl mx-auto md:sapce-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={300}
          height={450}
          alt={movie.title || movie.name}
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          className="rounded-lg"
        />

        <div className="p-2 ml-8 flex flex-col">
          <h2 className="text-4xl font-semibold mb-3 text-center lg:text-left xl:text-left">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="flex items-center mb-3">
            <MdDateRange className="mr-2 text-red-500" />
            <b>Release Date : </b>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="flex items-center mb-3">
            <FiStar className="mr-2 text-yellow-400" />
            <b>Rating : </b>
            {voteavg.toFixed(1) + " / 10 "}({movie.vote_count} votes)
          </p>
          <p className="flex items-center mb-3">
            <FiDollarSign className="mr-2 text-green-400" />
            <b>Revenue : </b>${movie.revenue.toLocaleString()}
          </p>
          <p className="flex items-center mb-3">
            <FiClock className="mr-2 text-blue-400" />
            <b>Runtime : </b>
            {movie.runtime} minutes
          </p>
        </div>
      </div>
    </div>
  );
}
