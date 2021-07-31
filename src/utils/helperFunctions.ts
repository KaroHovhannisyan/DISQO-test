export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const deepClone = <T>(data: T) => {
  return JSON.parse(JSON.stringify(data));
};
