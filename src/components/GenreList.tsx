import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.genre_id}>{genre.genre_name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
