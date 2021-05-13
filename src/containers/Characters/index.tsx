import React, { useEffect, useCallback, useState, ChangeEvent } from "react";
import InformationCard from "../../components/InformationCard";
import usePagination from "../../hooks/usePagination";

const fetchCharacters = async (currentPage: number) => {
  const characterDataRes = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${currentPage}`,
  );
  const getCharacterData = await characterDataRes.json();
  return getCharacterData;
};

interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: string;
  location: {
    name: string;
  };
  created: string;
}

export const Characters = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [saveTimeout, setSaveTimeout] = useState<
    ReturnType<typeof setTimeout>
  >();

  const {
    currentPage,
    jumpTo,
    maxPage,
    next,
    prev,
    setMaxPage,
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

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    saveTimeout || clearTimeout(saveTimeout);
    const newPage = event?.target?.value;

    setSaveTimeout(
      setTimeout(() => {
        jumpTo(newPage);
      }, 1000),
    );
  };
  return (
    <div>
      <div className="SectionTitles">Characters</div>
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
        {characters.map((character: ICharacter) => (
          <InformationCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            currentLocation={character.location.name}
            created={character.created}
          />
        ))}
      </div>
    </div>
  );
};
