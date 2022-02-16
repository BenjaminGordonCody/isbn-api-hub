const LibraryCardDetail = ({ content, className }) => {
  try {
    let string;
    if (content == undefined) {
      string = null;
    } else if (Array.isArray(content)) {
      string = content.join(", ");
    } else if (typeof content === "string") {
      string = content;
    } else {
      string = null;
    }
    return <div className={"cardDetail " + className}>{string}</div>;
  } catch (error) {
    console.log(error);
    return <div>error</div>;
  }
};
export default LibraryCardDetail;
