exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
exports.avg = (numbers) => {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
};
exports.sort = (numbers) => numbers.sort((a, b) => a - b);
exports.median = (numbers) => {
  const middle = numbers.length / 2;
  const result =
    numbers.length % 2 === 1
      ? numbers[middle]
      : (numbers[middle - 1] + numbers[middle]) / 2;
  console.log(numbers.length % 2);
  return result;
};
