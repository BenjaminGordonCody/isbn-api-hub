const bookArrFromISBNArr = async (arr, setBooks) => {
  let tempArr = [];

  //fetch ISBN responses for each, put in tepArr
  arr.forEach(async (ISBN, index) => {
    const bookObj = { ISBN: ISBN };
    bookObj.edition = await fetchEdition(ISBN);
    const worksKey = bookObj.edition.works[0].key; //the API puts it here
    bookObj.work = await fetchWorks(worksKey);
    tempArr[index] = bookObj;
  });
  return tempArr;
};

const fetchEdition = async (ISBN) => {
  const response = await fetch(`https://openlibrary.org/isbn/${ISBN}.json`);
  const data = await response.json();
  return data;
  // bookObj.edition = await data;
};

const fetchWorks = async (worksKey) => {
  const response = await fetch(`https://openlibrary.org${worksKey}.json`);
  const data = await response.json();
  return data;
};

// async function getWorksDetails(bookObj) {
//   console.log("getWorksDetails");
//   console.log("recieves" + bookObj);
//   await handleFetchWork(bookObj);
//   let desiredWorkFields = ["first_publish_date", "description", "subjects"];
//   desiredWorkFields.forEach((element) => {
//     if (bookObj.worksInfo[element]) {
//       bookObj[element] = bookObj.worksInfo[element];
//     }
//   });
//   delete bookObj.worksInfo;
//   delete bookObj.works;
//   return bookObj;
// }

// const handleFetchWork = async (bookObj) => {
//   console.log("handle fetch work");
//   let key = bookObj.works[0].key;
//   const response = await fetch(`https://openlibrary.org${key}.json`);
//   const data = await response.json();
//   bookObj.worksInfo = data;
// };

// const bookObjFromISBN = async (ISBN) => {
//   let bookObj = new BookObj(ISBN);
//   bookObj = await getEditionDetails(bookObj);
//   bookObj = await getWorksDetails(bookObj);
//   return bookObj;
// };

// async function getEditionDetails(bookObj) {
//   console.log("get edition details");
//   console.log("recieves" + bookObj);
//   await handleFetchISBN(bookObj);
//   const desiredEditionFields = [
//     "title",
//     "authors",
//     "publish_date",
//     "publishers",
//     "works",
//   ];

//   desiredEditionFields.forEach((element) => {
//     if (bookObj.edition[element]) {
//       bookObj[element] = bookObj.edition[element];
//     }
//   });
//   delete bookObj.edition;
//   return bookObj;
// }

export default bookArrFromISBNArr;
