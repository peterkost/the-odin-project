const analyzeArray = (array) => {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };
};

const average = (array) =>
  Number((array.reduce((a, b) => a + b, 0) / array.length).toFixed(2));

const min = (array) => Math.min(...array);

const max = (array) => Math.max(...array);

const length = (array) => array.length;

export { analyzeArray, average, min, max, length };
