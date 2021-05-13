import React, { useEffect, useState } from "react";

interface ILocation {
  id: string;
  name: string;
}

export const Locations = () => {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/location/`)
      .then((res) => res.json())
      .then(
        (locations) => {
          setLocations(locations.results);
        },
        (error) => {
          console.warn(error);
        },
      )
      .catch((err) => console.warn(err));
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading Locations...</div>;
  }
  return (
    <div>
      <div className="SectionTitles">Locations</div>
      {locations.map((location: ILocation) => (
        <div key={location.id}>{location.name}</div>
      ))}
    </div>
  );
};
