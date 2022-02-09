const fetchEdition = async (ISBN, setEdition) => {
  const response = await fetch(`https://openlibrary.org/isbn/${ISBN}.json`);
  const data = await response.json();
  setEdition(data);
};

const fetchWorks = async (worksKey, setWork) => {
  const response = await fetch(`https://openlibrary.org${worksKey}.json`);
  const data = await response.json();
  setWork(data);
};

export { fetchEdition, fetchWorks };
