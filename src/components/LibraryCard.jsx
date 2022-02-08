const LibraryCard = ({ book }) => {
  console.log(book.ISBN);
  const fields = [
    "title",
    "authors",
    "first_publish_date",
    "publish_date",
    "publishers",
    "description",
    "subjects",
  ];

  let returnObject = { ISBN: book.ISBN };

  fields.forEach((field) => {
    if (book.edition[field]) {
      returnObject[field] = book.edition[field];
    } else if (book.work[field]) {
      returnObject[field] = book.work[field];
    } else {
      returnObject[field] = null;
    }
  });
  console.log(returnObject);
  return <div className="LibraryCard">{returnObject["ISBN"]}</div>;
};

export default LibraryCard;
