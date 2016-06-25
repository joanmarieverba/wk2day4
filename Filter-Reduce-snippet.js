function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function reduce(array, callback){
    var accumulator ;  //undefined
    forEach (array, function (value, i, callbackArray) {
      if (i===0) {accumulator = value; }

      if (i < array.length) {
      accumulator += callback (accumulator, value); }
    });
      return accumulator;
    }

function filter(array, callback){
var returnArray = [];
reduce (array, function (a, b) {
  var val = callback(b);
  if (val) {
    returnArray.push(b);
  }
});
  return returnArray;
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 ;});
console.assert(evens[0] === 2);
console.assert(evens[1] === 4);


//var namesWithoutO = names.filter(function(name) {
//  if (name.toLowerCase().indexOf("o") > -1) {  //if o is found, return false
    //indexOf("o") index of the position where the character o first appears
    //scans string, finds first item, returns index -- if fails, returns -1
//    return false;  //remove from array
//  } else {  // o was not found
//     return true; //keep it in the array
//});
