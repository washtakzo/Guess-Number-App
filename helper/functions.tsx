export const getRandomNumber = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getFirstHigherNumber = (number: number, ...numbers: number[]) => {
  const sortedArray = numbers.sort();
  const firstHigherNumber = sortedArray.find((el) => el > number);
  return firstHigherNumber;
};

export const getFirstLowerNumber = (number: number, ...numbers: number[]) => {
  const sortedArray = numbers.sort();
  const firstLowerNumber = sortedArray.find((el) => el < number);
  return firstLowerNumber;
};
