// used to select a random word from our list words
export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// a handy way to create a range of elements and things
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