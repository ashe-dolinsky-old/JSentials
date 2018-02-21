const runPromisesInSequence = (input, ...args) => {
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

const rotateRight = (...args) => [args[args.length - 1], ...args.slice(0, args.length - 1)]
const rotateLeft = (...args) => [...args.slice(1, args.length), args[0]]
const carth = (...args) => {
    args = args.map(arg => [...arg])
    const frontiers = []
    const iterations = args.map(arg => arg.length).reduce((acc, next) => {
        frontiers.unshift(acc)
        const result = acc * next
        return result
    }, 1)
    const perms = []
    for (let i = 1; i <= iterations; i++) {
        perms.push(args.map(arg => arg[0]))
        for (let j = 0; j < args.length; j++) {
            if(i % frontiers[j] === 0) {
                args[j].push(args[j].shift())
            }
        }
    }
    return perms
}

const Timekeeper = ({ body = () => {}, end = 0, tick = 100, delay = 0, next = null }) => {
    let innerTimeout = null
    const inner = (time, meta) => {
        if(time < end) {
            meta = body({ time, end, tick, delay, next, meta })
            innerTimeout = setTimeout(() => inner(time + tick, meta), tick)
        } else {
            innerTimeout = null
            if (next) next({ time, end, tick, delay, next })
        }
    }
    let delayTimeout = setTimeout(() => {
        delayTimeout = null
        inner(0)
    }, delay)
    return [
        () => !(delayTimeout === null && innerTimeout === null),
        () => {
            if (delayTimeout) clearTimeout(delayTimeout)
            if (innerTimeout) clearTimeout(innerTimeout)
        }
    ]
}

module.exports = {
  runPromisesInSequence,
  rotateRight,
  rotateLeft,
  carth,
  Timekeeper
}