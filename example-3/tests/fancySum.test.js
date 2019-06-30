import { fancySum } from "../js/index.js";

test('sums values from inputs', () => {
  const inputMocks = [{value: 5}, {value: 2}];
  const result = fancySum(inputMocks);

  expect(result).toBe(7);
});

test('returns NaN if any input is missing a value', () => {
  const inputMocks = [{value: undefined}, {value: 2}];
  const result = fancySum(inputMocks);

  expect(result).toBe(NaN);
});
