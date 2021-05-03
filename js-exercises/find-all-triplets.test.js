import { findTriplet } from './find-all-triplets';

describe('findTriplet', () => {
  const target = 0;
  const nums = [-3, 0, 1, 2, -1, 1, -2];
  const result = [
    [-3, 1, 2],
    [-3, 2, 1],
    [0, 1, -1],
    [0, 2, -2],
    [0, -1, 1],
    [1, 1, -2],
  ];
  test('Output toEqual', () => {
    expect(findTriplet(nums, target)).toEqual(result);
  });
});
