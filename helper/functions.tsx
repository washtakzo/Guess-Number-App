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

export const generateRandomBetween = (
  min: number,
  max: number,
  exception: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exception) {
    return generateRandomBetween(min, max, exception);
  }

  return randomNumber;
};
