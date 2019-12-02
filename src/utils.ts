export const getFormattedDate = (unixTime: any) => {
  const date = new Date(unixTime * 1000);

  const formattedDate = `${date.toLocaleString()}`;

  return formattedDate;
};
