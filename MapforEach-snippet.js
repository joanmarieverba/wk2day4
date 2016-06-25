function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback){
var returnArray = [];
forEach (array, function (array, i) {
  returnArray[i]= callback(array); }
);
  console.log(returnArray);
  return returnArray;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v ;});
console.assert(squares[0] === 1);
console.assert(squares[1] === 4);
console.assert(squares[2] === 9);
console.assert(squares[3] === 16);
