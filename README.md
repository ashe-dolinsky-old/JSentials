# JSentials
Offers many JS convenience functions

**runPromisesInSequence**(*input*, *...args*)

Where input is the initial input and ...args are a list of callbacks resultAsNextInput => promise.
Returns a promies that gets resolved when everything is done, gets rejected if anything fails.
Used to run promises in sequence one after the other. Functions like an async/await loop in ES7.