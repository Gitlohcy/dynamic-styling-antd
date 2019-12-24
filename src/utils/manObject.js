function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
      result[key] = mapFn(object[key])
      return result
    }, {})
  }

// export const removeEmpty = (obj) => {
//     Object.keys(obj)
//         .filter(k => obj[k] != null) // Remove undef. and null.
//         .reduce(
//         (newObj, k) =>
//             typeof obj[k] === "object"
//             ? { ...newObj, [k]: removeEmpty(obj[k]) } // Recurse.
//             : { ...newObj, [k]: obj[k] }, // Copy value.
//         {}
//         );
// }
  

export const removeEmpty = obj => {
    const newObj = {};
  
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === "object") {
        newObj[key] = removeEmpty(obj[key]); // recurse
      } else if (obj[key] != null) {
        newObj[key] = obj[key]; // copy value
      }
    });
  
    return newObj;
  };