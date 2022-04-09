const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 20;

function getPagination(query) {
  const page = Math.abs(Number(query.page)) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(Number(query.limit)) || DEFAULT_PAGE_LIMIT;

  const offset = (page - 1) * limit;

  return { offset, limit };
}

module.exports = {
  getPagination,
};
