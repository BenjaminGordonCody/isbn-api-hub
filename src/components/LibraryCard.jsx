const LibraryCard = ({ book }) => {
  console.log(book);
  const fields = [
    "ISBN",
    "title",
    "authors",
    "first_publish_date",
    "publish_date",
    "publishers",
    "description",
    "subjects",
  ];
  let returnObject = {};

  fields.map((field) => {
    returnObject[field] = book[field] ? book[field] : "unknown";
  });
  console.log(book);
  console.log(returnObject);
  return <div className="LibraryCard"></div>;
};

export default LibraryCard;
