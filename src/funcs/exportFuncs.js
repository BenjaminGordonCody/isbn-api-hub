export const makeSummaryObject = (edition, work, author) => {
  return {
    title: edition.title,
    author: author.name,
    tags: work.subjects.join(", "),
  };
};
