export const makeSummaryObject = (edition, work, author) => {
  try {
    return {
      title: edition.title ? edition.title : null,
      author: author.name ? author.name : null,
      tags: work.subjects ? work.subjects.join(", ") : null,
      description: work.description.value ? work.description.value : null,
    };
  } catch (e) {
    return {};
  }
};
