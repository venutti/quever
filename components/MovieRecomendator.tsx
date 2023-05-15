"use client";
import { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom as RandomIcon } from "react-icons/gi";
import { BsArrowRepeat as RepeatIcon } from "react-icons/bs";
import Select from "./Select";
import MovieDetail from "./MovieDetail";

import movieGenres from "../data/movieGenres";

export default function MovieRecomendator() {
  const options = movieGenres.map((genre) => ({
    label: genre.name,
    value: String(genre.id),
  }));

  const [selectedGenre, setSelectedGenre] = useState(options[0]);
  const [isMovieDetailVisible, setIsMovieDetailVisible] = useState(false);
  const [movieKey, setMovieKey] = useState(0);

  const handleGenreChange = (value: { label: string; value: string }) => {
    setSelectedGenre(value);
  };

  const handleRandomClick = () => {
    const randomGenre = options[Math.floor(Math.random() * options.length)];
    setSelectedGenre(randomGenre);
  };

  const handleRepeatClick = () => {
    setMovieKey((prev) => prev + 1);
  };

  const handleGenerateClick = () => {
    setIsMovieDetailVisible(true);
  };

  return (
    <section className="bg-black p-4 rounded-xl max-w-sm mx-auto">
      {/* GENRE SELECTOR */}
      <div className="max-w-[300px] mx-auto">
        <p className="text-center mb-2">Selecciona un género:</p>
        <div className="flex gap-4 items-center">
          <div className="flex-1 grid items-center">
            <Select
              options={options}
              value={selectedGenre}
              onChange={handleGenreChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              className="text-4xl hover:text-pink-700"
              type="button"
              onClick={handleRandomClick}
            >
              <RandomIcon />
            </button>
            <button
              className="text-2xl hover:text-yellow-700"
              type="button"
              onClick={handleRepeatClick}
            >
              <RepeatIcon />
            </button>
          </div>
        </div>
      </div>
      {/* MOVIE */}
      <div className="relative overflow-hidden mt-4 rounded-md grid place-items-center min-w-[200px] min-h-[300px] mx-auto">
        {!isMovieDetailVisible && (
          <button
            className="bg-yellow-800 px-3 py-2 rounded"
            onClick={handleGenerateClick}
          >
            Generar
          </button>
        )}
        {isMovieDetailVisible && (
          <MovieDetail key={movieKey} genreId={selectedGenre.value} />
        )}
      </div>
    </section>
  );
}
