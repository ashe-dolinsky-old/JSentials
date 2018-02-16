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

module.exports = {
  rotateRight,
  rotateLeft,
  carth
}