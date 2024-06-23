function analyzeArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
