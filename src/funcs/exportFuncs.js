export const makeSummaryObject = (edition, work, author) => {
  try {
    console.log(edition);
    let description;
    if (!work.hasOwnProperty("description")) {
      description = null;
    } else if (work.description.hasOwnProperty("value")) {
      description = work.description.value;
    } else {
      description = work.description;
    }
    return {
      title: edition.title ? edition.title : null,
      author: author.name ? author.name : null,
      tags: work.subjects ? work.subjects.join(", ") : null,
      description: description,
    };
  } catch (e) {
    console.log(e);
    return {};
  }
};
