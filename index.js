// sum of an array apart from the highest and lowest value

function sum(array) {
    return array.length < 2 ? 0 : array.reduce((a, b) =>  a + b) - Math.min(...array) - Math.max(...array);
};

  let output = sum([2, 5, 6, 7, 10]);
 console.log(output);
