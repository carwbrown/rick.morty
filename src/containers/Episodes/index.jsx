import React, { useEffect, useCallback, useState } from "react";

const fetchEpisodes = () => {
  return fetch(`https://rickandmortyapi.com/api/episode/`).then(res =>
    res.json()
  );
};

const Episodes = () => {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    fetchEpisodes()
      .then(eps => setEpisodes(eps.results))
      .catch(err => console.warn(err));

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
      <h2>Episodes</h2>
      {episodes.map(episode => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  );
};

export default Episodes;
