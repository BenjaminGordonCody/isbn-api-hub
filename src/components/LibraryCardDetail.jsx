const LibraryCardDetail = ({ props }) => {
  try {
    let string;
    if (props == undefined) {
      string = "not here";
    } else if (Array.isArray(props)) {
      string = props.toString();
    } else if (typeof props === "string") {
      string = props;
    } else {
      string = "mysterious input";
    }
    return <div className="cardDetail">{string}</div>;
  } catch (error) {
    console.log(error);
    return <div>error</div>;
  }
};
export default LibraryCardDetail;
