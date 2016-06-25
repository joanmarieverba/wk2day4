//ASSIGNMENT
//Try to map over an array of strings and return an array of the respective string lengths.
//Then reduce that new array to be a sum. This sum (integer) should represent the total number of characters in the original array.
//You must use map and reduce for this assignment


var names = ["Tim", "Joan", "Joe", "Alec", "Hunter"];

var stringLengths = names.map(function (v, i){
  console.log(names[i].length);
  return names[i].length;
});

console.log(stringLengths);

var sum = stringLengths.reduce(function(a,b){
  return a+b;
});
console.log(sum);

//JIM's
//method 1 -chaining
 // function numChars(names) {
 //   return names.map(function(name) {
 //     return name.length;
 //   }).reduce(function(a,b)){
 //     return a+b;
 //   }
 //   }
 // }
 //method 2 -not chaining
 // var charsArray = names.map(function(name) {
 //   return name.length;
 // });
 //
 // var charsSum = charsArray.reduce(function (a,b) {
 //   return a+b;
 // });
 // return charsSum;
 // }

 //Filter  -->  take out only things that match
//take out all names with an 'o' in them
 var names = ["Tim", "Joan", "Joe", "Alec", "Hunter"];
//if return true, keep item in array, otherwise take it out
 var namesWithoutO = names.filter(function(name) {
   if (name.toLowerCase().indexOf("o") > -1) {  //if o is found, return false
     //indexOf("o") index of the position where the character o first appears
     //scans string, finds first item, returns index -- if fails, returns -1
     return false;  //remove from array
   } else {  // o was not found
      return true; //keep it in the array
   }
});

//here, the size of the array is smaller than the size of the array you started with

//Assignment - take out names with O and then count chars in remainder
var codenames = ["T-bone", "Astronaut", "Tiger", "Big Al", "Tiki", "Prancy"];
var namesWithoutO = codenames.filter(function(name) {
  if (name.toLowerCase().indexOf("o") > -1) {
    return false;
  } else {
     return true;
  }
});

console.log(namesWithoutO);

var stringLengths = namesWithoutO.map(function (v, i){
  console.log(namesWithoutO[i].length);
  return namesWithoutO[i].length;
});

console.log(stringLengths);

var sum = stringLengths.reduce(function(a,b){
  return a+b;
});
console.log(sum);

console.assert(sum === 21);


//here, the size of the array is smaller than the size of the array you started with

//Jim's - Assignment - take out names with O and then count chars in remainder
// var codenames = ["T-bone", "Astronaut", "Tiger", "Big Al", "Tiki", "Prancy"];
// var charsOfWordsWithoutO = codenames.filter(function(name) {
//   return name.indexOf('o') == -1;
// }) .map(function(name){
//   return name.length;
// }) .reduce (function(a,b){}
//     return a+b;
// });

//console.assert(charsOfWordsWithoutO === 21);
