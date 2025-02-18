const importAllImages = (obj) => {
  let images = {};

  obj.keys().map((item) => (images[item.replace("./", "")] = obj(item)));

  return images;
};

export const images = importAllImages(
  require.context("./images", false, /\.png||.jpg/)
);
