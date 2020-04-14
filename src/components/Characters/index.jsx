import React, { useEffect, useCallback, useState } from 'react';
import InformationCard from '../InformationCard';

const fetchCharacters = async() => {
	const characterDataRes  = await fetch(`https://rickandmortyapi.com/api/character/`);
	const getCharacterData = await characterDataRes.json();
	return getCharacterData.results;
};

const Characters = () =>{
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);

	const fetchData = useCallback(async () => {
		setLoading(true);
		const fetchedCharacters = await fetchCharacters();
		setCharacters(fetchedCharacters);
		setLoading(false);
	}, [])

	useEffect(() => {
		fetchData();
	}, [fetchData])

	if (loading){
		return <div>Loading Characters...</div>
	}
  return (
		<div>
			<h2>Characters</h2>
			<div className="InformationSection">
				{characters.map(character => (
					<InformationCard
						id={character.id}
						name={character.name}
						image={character.image}	
					/>
				))}
			</div>
		</div>
  );
}

export default Characters;