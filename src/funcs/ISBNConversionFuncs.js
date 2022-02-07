class BookObj {
  constructor(ISBN) {
    console.log("book obj constructor");
    this.ISBN = ISBN;
  }
}

const handleFetchISBN = async (bookObj) => {
  console.log("handle fetch ISBN");
  const response = await fetch(
    `https://openlibrary.org/isbn/${bookObj.ISBN}.json`
  );
  const data = await response.json();
  bookObj.edition = data;
};

const handleFetchWork = async (bookObj) => {
  console.log("handle fetch work");
  let key = bookObj.works[0].key;
  const response = await fetch(`https://openlibrary.org${key}.json`);
  const data = await response.json();
  bookObj.worksInfo = data;
};

const bookObjFromISBN = async (ISBN) => {
  console.log("book Obj from ISBN");
  let bookObj = new BookObj(ISBN);
  await getEditionDetails();
  await getWorksDetails();
  return bookObj;

  async function getWorksDetails() {
    console.log("getWorksDetails");
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
    console.log("get edition details");
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

const bookArrFromISBNArr = async (arr, setBooks, setArrLoaded) => {
  let tempArr = arr;
  console.log(arr);
  console.log(tempArr);
  tempArr.forEach(async (ISBN, index) => {
    const bookObj = await bookObjFromISBN(ISBN);
    tempArr[index] = bookObj;
  });
  console.log(tempArr);
  setBooks(tempArr);
  console.log("Book state set");
  setArrLoaded(true);
  console.log("Loaded state set");
};

export default bookArrFromISBNArr;
