function runPromisesInSequence (input, ...args) {
  return new Promise((resolve, reject) => {
    const recurse = (input, acc, ...args) => {
      if (args.length) {
        args[0](input).then(result => {
          recurse(result, [ ...acc, result ], ...(args.slice(1)))
        }).catch(err => reject(err))
      } else {
        resolve(acc)
      }
    }
    recurse(input, [ input ], ...args)
  })
}

module.exports = {
  runPromisesInSequence
}