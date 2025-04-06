import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {movies.map((movie, index) => (
    <div key={index} className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
      <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-300">⭐ {movie.rating} | 📅 {movie.release_date}</p>
        <p className="mt-2 text-sm text-gray-400">{movie.genre}</p>
        <p className="text-sm mt-2 line-clamp-3">{movie.synopsis}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default MovieCard;
