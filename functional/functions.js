const incrementNumbers = (list) => list.map(number => number + 1)
const sum = (list, accumulator) => {
  if (list.length == 0) {
    return accumulator;
  }

  return sum(list.slice(1), accumulator + list[0]);
}