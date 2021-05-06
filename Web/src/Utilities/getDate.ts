export const getDate = (date: string) => {
  const result = new Date(parseInt(date));
  return JSON.stringify(result);
};
