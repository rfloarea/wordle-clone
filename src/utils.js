// used to select a random word from our list of words
export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// used to create a certain number of elements
export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};