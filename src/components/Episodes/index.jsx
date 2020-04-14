import React, { useEffect, useCallback, useState } from 'react';

const fetchEpisodes = async() => {
	const episodesDataRes  = await fetch(`https://rickandmortyapi.com/api/episode/`);
	const getEpisodesData = await episodesDataRes.json();
	return getEpisodesData.results;
};

const Episodes = () =>{
	const [loading, setLoading] = useState(true);
	const [episodes, setEpisodes] = useState([]);

	const fetchData = useCallback(async () => {
		setLoading(true);
		const fetchedepisodes = await fetchEpisodes();
		setEpisodes(fetchedepisodes);
		setLoading(false);
	}, [])

	useEffect(() => {
		fetchData();
	}, [fetchData])

	if (loading){
		return <div>Loading Episodes...</div>
	}
  return (
		<div>
			<h2>Episodes</h2>
			{episodes.map(episode => (
				<div key={episode.id}>{episode.name}</div>
			))}
		</div>
  );
}

export default Episodes;