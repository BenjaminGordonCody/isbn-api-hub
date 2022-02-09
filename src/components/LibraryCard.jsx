import { useState } from "react";
import { fetchEdition, fetchWorks } from "../funcs/ISBNConversionFuncs";

const LibraryCard = ({ ISBN }) => {
  const [edition, setEdition] = useState(false);
  const [work, setWork] = useState(false);

  try {
    //states

    //API call

    if (!edition) {
      fetchEdition(ISBN, setEdition);
    } else if (edition.works && !work) {
      const worksKey = edition.works[0].key;
      fetchWorks(worksKey, setWork);
    }

    console.log(work, edition);
    // editionPromise.then(setEdition(editionPromise));

    // console.log(book.ISBN);
    // const fields = [
    //   "title",
    //   "authors",
    //   "first_publish_date",
    //   "publish_date",
    //   "publishers",
    //   "description",
    //   "subjects",
    // ];

    // let returnObject = { ISBN: book.ISBN };

    // fields.forEach((field) => {
    //   if (book.edition[field]) {
    //     returnObject[field] = book.edition[field];
    //   } else if (book.work[field]) {
    //     returnObject[field] = book.work[field];
    //   } else {
    //     returnObject[field] = null;
    //   }
    // });
    // console.log(returnObject);
    return <div className="LibraryCard">hello</div>;
  } catch (error) {
    console.log(error);
  }
};

export default LibraryCard;
