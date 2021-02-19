/* eslint-disable guard-for-in */
const deepCopyObject = objToCopy => {
  let newObj = objToCopy;
  if (objToCopy && typeof objToCopy === 'object') {
    newObj = Object.prototype.toString.call(objToCopy) === '[object Array]' ? [] : {};
    for (const key in objToCopy) {
      newObj[key] = deepCopyObject(objToCopy[key]);
    }
  }
  return newObj;
};

export { deepCopyObject };
