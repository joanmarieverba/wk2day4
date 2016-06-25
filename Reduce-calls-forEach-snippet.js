function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function reduce(array, callback){
    var accumulator ;  //undefined
    forEach (array, function (value, i, callbackArray) {
      if (i===0) {accumulator = value; }

      if (i < array.length - 1) {
      accumulator += callback (accumulator, value); }
    });
      return accumulator;
    }


// tests
// ---
console.assert(reduce([1, 2, 3, 4], function(a, v){ return a*v ;}) === 24);


//Jim's code (works for both this and filter exercise)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback){
  var accumulator;
  forEach(array, function(value, i, callbackArray) {
    // If it is our first time through, use the first value
    if(i === 0) {
      accumulator = value;
    }
    // Otherwise,
    else if (i < array.length) {
      accumulator = callback(accumulator, value);
    }
  });
  return accumulator;
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
);
