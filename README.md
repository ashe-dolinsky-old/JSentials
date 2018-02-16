# JSentials
Offers many JS convenience functions

**runPromisesInSequence**(*input*, *...args*)

Where input is the initial input and ...args are a list of callbacks resultAsNextInput => promise.
Returns a promies that gets resolved when everything is done, gets rejected if anything fails.
Used to run promises in sequence one after the other. Functions like an async/await loop in ES7.

**carth**(*...args*)

Where ...args are a list of lists of values.
Returns a carthesian product in an n-dimensional vector space.
Vectors don't have to be of the same length, but if one of them is zero-dimensional it will return an emtpy list.