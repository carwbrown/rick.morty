import React, { useEffect, useCallback, useState } from "react";

const fetchEpisodes = () => {
  return fetch(`https://rickandmortyapi.com/api/episode/`).then((res) =>
    res.json(),
  );
};
interface IEpisode {
  id: string;
  name: string;
}
export const Episodes = () => {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    fetchEpisodes()
      .then((eps) => setEpisodes(eps.results))
      .catch((err) => console.warn(err));

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading Episodes...</div>;
  }
  return (
    <div>
      <div className="SectionTitles">Episodes</div>
      {episodes.map((episode: IEpisode) => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  );
};
