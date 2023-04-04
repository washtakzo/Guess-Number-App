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
