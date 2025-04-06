// src/components/Recommendation.js
import React, { useState } from "react";
import axios from "axios";

const Recommendation = () => {
  const [userId, setUserId] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!selectedMovie) return;
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/recommend", {
        userId,
        movie: selectedMovie,
      });
      setRecommendations(response.data.recommendations || []);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Glass Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Enter Your Preferences
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full md:w-1/4 p-2 rounded bg-gray-800 border border-gray-600 text-white"
          />
          <input
            type="text"
            placeholder="Enter a movie title"
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            className="w-full md:w-1/2 p-2 rounded bg-gray-800 border border-gray-600 text-white"
          />
          <button
            onClick={handleRecommend}
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            {loading ? "Loading..." : "Get Recommendations"}
          </button>
        </div>
      </div>

      {/* Recommendation Grid */}
      {recommendations.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Recommended Movies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recommendations.map((movie, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 text-center">
                  <h4 className="text-lg font-medium">{movie.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
