export const makeSummaryObject = (edition, work, author) => {
  try {
    return {
      title: edition.title,
      author: author.name,
      tags: work.subjects ? work.subjects.join(", ") : null,
    };
  } catch (e) {
    return {};
  }
};
