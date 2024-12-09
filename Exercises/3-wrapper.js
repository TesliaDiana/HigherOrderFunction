'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < types - 1; i++) {
    if (typeof args[i] !== typeof types[i](args[i])) throw new Error("TypeError ");      
  }
  const result = fn(...args);
  if (typeof result !== typeof types[types.length - 1](result)) throw new Error("TypeError "); 
  return result;
};

module.exports = { contract };
