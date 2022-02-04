class BookObj {
  constructor(ISBN) {
    this.ISBN = ISBN;
  }
}

const handleFetchISBN = async (bookObj) => {
  const response = await fetch(
    `https://openlibrary.org/isbn/${bookObj.ISBN}.json`
  );
  const data = await response.json();
  bookObj.edition = data;
};

const handleFetchWork = async (bookObj) => {
  let key = bookObj.works[0].key;
  const response = await fetch(`https://openlibrary.org${key}.json`);
  const data = await response.json();
  bookObj.worksInfo = data;
};

const bookObjFromISBN = async ({ ISBN }) => {
  let bookObj = new BookObj(ISBN);
  await getEditionDetails();
  await getWorksDetails();
  console.log(bookObj);
  return bookObj;

  async function getWorksDetails() {
    await handleFetchWork(bookObj);
    let desiredWorkFields = ["first_publish_date", "description", "subjects"];
    desiredWorkFields.forEach((element) => {
      if (bookObj.worksInfo[element]) {
        bookObj[element] = bookObj.worksInfo[element];
      }
    });
    delete bookObj.worksInfo;
    delete bookObj.works;
  }

  async function getEditionDetails() {
    await handleFetchISBN(bookObj);
    const desiredEditionFields = [
      "title",
      "authors",
      "publish_date",
      "publishers",
      "works",
    ];

    desiredEditionFields.forEach((element) => {
      if (bookObj.edition[element]) {
        bookObj[element] = bookObj.edition[element];
      }
    });
    delete bookObj.edition;
  }
};

export default bookObjFromISBN;
