export const dropThousand = (number: number): string => {
  if (number < 1000) {
    return `${number}`;
  } else {
    return `${Math.floor(number / 1000)}.${Math.floor((number % 1000) / 100)}K`;
  }
};
