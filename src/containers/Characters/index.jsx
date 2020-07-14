import React, { useEffect, useCallback, useState } from "react";
import InformationCard from "../../components/InformationCard";
import usePagination from "../../hooks/usePagination";

const fetchCharacters = async currentPage => {
  const characterDataRes = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${currentPage}`
  );
  const getCharacterData = await characterDataRes.json();
  console.log("getCharacterData: ", getCharacterData);
  return getCharacterData;
};

const Characters = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [saveTimeout, setSaveTimeout] = useState();

  const {
    currentPage,
    jumpTo,
    maxPage,
    next,
    prev,
    setMaxPage
  } = usePagination();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const fetchedCharacters = await fetchCharacters(currentPage);
    setCharacters(fetchedCharacters.results);
    setMaxPage(fetchedCharacters.info.pages);
    if (fetchedCharacters) {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  const fetchDataPagination = useCallback(async () => {
    const fetchedCharacters = await fetchCharacters(currentPage);
    setCharacters(fetchedCharacters.results);
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchDataPagination();
  }, [fetchDataPagination]);

  if (loading) {
    return <div>Loading Characters...</div>;
  }

  const handleOnChange = event => {
    clearTimeout(saveTimeout);
    const newPage = event.target.value;

    setSaveTimeout(
      setTimeout(() => {
        jumpTo(newPage);
      }, 1000)
    );
  };
  return (
    <div>
      <h2>Characters</h2>
      <button onClick={prev} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={next} disabled={currentPage === maxPage}>
        Next
      </button>
      <div>
        on page: <strong>{currentPage}</strong> of <strong>{maxPage}</strong>
      </div>
      <div>
        Jump to Page: <input name="pageNumber" onChange={handleOnChange} />
      </div>
      <div className="InformationSection">
        {characters.map(character => (
          <InformationCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            origin={character.origin}
            currentLocation={character.location.name}
            created={character.created}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;
