import { useState, useEffect } from "react";
import { Image, Spin } from "antd";
import MovieModal from "./MovieModal";

const getMovie = async (genreId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&with_genres=${genreId}&language=es-AR`
  );
  if (!response.ok) throw new Error("Error fetching movie");
  const data = await response.json();
  const randomMovie =
    data.results[Math.floor(Math.random() * data.results.length)];
  return randomMovie;
};

interface MovieDetailProps {
  genreId: string;
}

interface Movie {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function MovieDetail({ genreId }: MovieDetailProps) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const movie = await getMovie(genreId);
      setMovie(movie);
      setLoading(false);
    }

    fetchData();
  }, [genreId]);

  if (loading) {
    return <Spin />;
  }

  const image = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  return (
    <>
      <Image
        src={image}
        alt={movie?.title}
        width={200}
        height={300}
        placeholder={
          <div className="grid place-items-center h-full w-full">
            <Spin />
          </div>
        }
        preview={false}
      />
      <MovieModal
        title={movie?.title}
        posterPath={image}
        voteAverage={movie?.vote_average}
        overview={movie?.overview}
      />
    </>
  );
}
