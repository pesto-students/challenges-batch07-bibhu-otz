const findTriplet = (nums = [], target) => {
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (nums[i] + nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};
export { findTriplet };
