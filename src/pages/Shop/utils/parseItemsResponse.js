export const parseItemsResponse = (res) => res
  .filter((item) => item.key.includes('_data'))
  .map((item) => JSON.parse(item.value));
