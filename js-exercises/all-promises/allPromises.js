const allPromises = (args = []) => {
  /* Array to keep result of resolved Promises */
  const arrResolved = Array(args.length);
  /* counter to keep track of no. of resolved promises */
  let counter = 0;
  /* To resolve/reject based on args items */
  return new Promise((resolve, reject) => {
  /* Iterating the given promises array */
    args.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(item => {
          counter += 1;
          arrResolved[index] = item;
          if (counter === args.length) {
            resolve(arrResolved);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};

export { allPromises };
