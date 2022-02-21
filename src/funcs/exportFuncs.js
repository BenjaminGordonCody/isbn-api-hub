export const makeSummaryObject = (edition, work, author) => {
  try {
    console.log(edition);
    let description;
    if (!work.hasOwnProperty("description")) {
      description = "";
    } else if (work.description.hasOwnProperty("value")) {
      description = work.description.value;
    } else {
      description = work.description;
    }
    return {
      title: edition.title ? edition.title : "",
      author: author.name ? author.name : "",
      subjects: work.subjects ? work.subjects.join(", ") : "",
      description: description,
    };
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const objArrToCSV = (objArr) => {
  try {
    let fields = ["title", "author", "subjects", "description"];
    let string = "";

    fields.forEach((field) => (string += field + "\t"));
    objArr.forEach((item) => {
      string += "\n";
      fields.forEach((field) => {
        let cleanData = item[field].replace(/"/, "'");
        cleanData = cleanData.replace(/[\n\t\r]/gi, "__");
        string += `"` + cleanData + `"` + "\t";
      });
    });
    console.log(string);
  } catch (e) {
    console.log(e);
  }
};
