import { useEffect, useState } from "react";
import { makeSummaryObject } from "../funcs/exportFuncs";
import {
  fetchAuthor,
  fetchEdition,
  fetchWorks,
} from "../funcs/ISBNConversionFuncs";
import LibraryCardDetail from "./LibraryCardDetail";

const LibraryCard = ({ ISBN, exportArr, setExportArr }) => {
  //states
  const [edition, setEdition] = useState(false);
  const [work, setWork] = useState(false);
  const [auth, setAuth] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [exportObj, setExportObj] = useState(false);

  useEffect(() => {
    if (loaded) {
      setExportArr([...exportArr, exportObj]);
    }
  }, [loaded]);

  try {
    //API call
    if (!edition) {
      fetchEdition(ISBN, setEdition);
    } else if (edition.works && !work) {
      //next two lines assume only one work and one author is relevant
      fetchWorks(edition.works[0].key, setWork);
    } else if (edition.authors && !auth) {
      fetchAuthor(edition.authors[0].key, setAuth);
    } else if (work && auth && !loaded) {
      setExportObj(makeSummaryObject(edition, work, auth));
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
      name: auth,
      first_publish_date: work,
      publish_date: edition,
      publishers: edition,
      description: work,
      subjects: work,
    };

    // fields split into short/long to determine placement by CSS
    const shortFields = [
      "title",
      "name",
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
            return (
              <LibraryCardDetail
                key={field}
                content={refObj[field]}
                className={field}
              />
            );
          })}
        </div>
        <div className="longFields">
          {longFields.map((field) => {
            const refObj = whereFind[field];
            return (
              <LibraryCardDetail
                key={field}
                content={refObj[field]}
                className={field}
              />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error.message);
    return <div className="libraryCard failed">{ISBN} did not load</div>;
  }
};

export default LibraryCard;
