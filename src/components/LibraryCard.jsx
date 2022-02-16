import { useState } from "react";
import { fetchEdition, fetchWorks } from "../funcs/ISBNConversionFuncs";
import LibraryCardDetail from "./LibraryCardDetail";

const LibraryCard = ({ ISBN }) => {
  //states
  const [edition, setEdition] = useState(false);
  const [work, setWork] = useState(false);
  const [loaded, setLoaded] = useState(false);

  try {
    //API call
    if (!edition) {
      fetchEdition(ISBN, setEdition);
    } else if (edition.works && !work) {
      const worksKey = edition.works[0].key; //assumes only one work is relevant
      fetchWorks(worksKey, setWork);
    } else if (work && !loaded) {
      setLoaded(true);
    }

    //return statement whilst waiting on API
    if (!loaded) {
      return (
        <div className={"libraryCard waiting " + ISBN}>
          Waiting on ISBN:{ISBN} to load
        </div>
      );
    }

    //where in the returned objects is the information kept?
    const whereFind = {
      title: edition,
      first_publish_date: work,
      publish_date: edition,
      publishers: edition,
      description: work,
      subjects: work,
    };

    const shortFields = [
      "title",
      "first_publish_date",
      "publish_date",
      "publishers",
    ];
    const longFields = ["description", "subjects"];

    return (
      <div className={"libraryCard fulfilled " + ISBN}>
        <div className="shortFields">
          {shortFields.map((field) => {
            const refObj = whereFind[field];
            console.log(refObj[field]);
            return (
              <LibraryCardDetail content={refObj[field]} className={field} />
            );
          })}
        </div>
        <div className="longFields">
          {longFields.map((field) => {
            const refObj = whereFind[field];
            console.log(refObj[field]);
            return (
              <LibraryCardDetail content={refObj[field]} className={field} />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default LibraryCard;
