export const getFormattedDate = (unixTime: any) => {
  const date = new Date(unixTime * 1000);

  if (date.toLocaleDateString !== new Date().toLocaleDateString) {
    return `${date.toLocaleDateString()}`;
  }

  return `${date.toLocaleString()}`;
};

export const getSourceSite = (url: string) => {
  const pattern = /(.+:\/\/)?([^\/]+)(\/.*)*/i;
  const urlBlocks: any = pattern.exec(url);

  return urlBlocks[2];
};
