export const getRandomNumber = (min, max) => {
  const amplitude = max - min;
  const randomamplitude = min + Math.round(Math.random() * amplitude);
  return randomamplitude;
};
