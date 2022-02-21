const fetchEdition = async (ISBN, setEdition) => {
  try {
    const response = await fetch(`https://openlibrary.org/isbn/${ISBN}.json`);
    const data = await response.json();
    setEdition(data);
  } catch (err) {
    console.log(err);
  }
};

const fetchWorks = async (worksKey, setWork) => {
  try {
    const response = await fetch(`https://openlibrary.org${worksKey}.json`);
    const data = await response.json();
    setWork(data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAuthor = async (authKey, setAuth) => {
  try {
    const response = await fetch(`https://openlibrary.org${authKey}.json`);
    const data = await response.json();
    setAuth(data);
  } catch (err) {
    console.log(err);
  }
};

export { fetchEdition, fetchWorks, fetchAuthor };
