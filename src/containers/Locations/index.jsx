import React, { useEffect, useCallback, useState } from 'react';

const fetchLocations = async() => {
	const locationsDataRes  = await fetch(`https://rickandmortyapi.com/api/location/`);
	const getLocationsData = await locationsDataRes.json();
	return getLocationsData.results;
};

const Locations = () =>{
	const [loading, setLoading] = useState(true);
	const [locations, setLocations] = useState([]);

	const fetchData = useCallback(async () => {
		setLoading(true);
		const fetchedLocations = await fetchLocations();
		setLocations(fetchedLocations);
		setLoading(false);
	}, [])

	useEffect(() => {
		fetchData();
	}, [fetchData])

	if (loading){
		return <div>Loading Locations...</div>
	}
  return (
		<div>
			<h2>Locations</h2>
			{locations.map(location => (
				<div key={location.id}>{location.name}</div>
			))}
		</div>
  );
}

export default Locations;