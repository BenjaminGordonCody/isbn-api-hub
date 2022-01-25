const WorkDetails = ({ work }) => {
  try {
    //flatten subject array-----------------------------------------------
    let subjectString;
    if (work.hasOwnProperty("subjects")) {
      subjectString = work.subjects.join(", ");
      console.log(subjectString);
    }
    // gather available fields ------------------------------
    let fields = ["first_publish_date", "pages", "description"];
    const foundFields = [subjectString];
    console.log(foundFields);

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (work.hasOwnProperty(field)) {
        foundFields.unshift(work[field]);
      }
    }
    //return ------------------------------------------------------------
    return (
      <ul>
        {foundFields.map((field) => (
          <li>{field}</li>
        ))}
      </ul>
    );
  } catch {
    return <div>catch error</div>;
  }
};

export default WorkDetails;
