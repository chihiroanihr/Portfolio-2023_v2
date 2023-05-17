const checkObjectNullEmpty = (obj) => {
  return Object.values(obj).some(
    (value) => value === null || value === undefined
  );
};

export default checkObjectNullEmpty;
