function chunkArrayInGroups(array, chunkSize) {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  return results;
}

export {
  chunkArrayInGroups,
};
