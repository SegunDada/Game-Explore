import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.genre_id}>{genre.genre_name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
