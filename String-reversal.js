//STRING REVERSAL

// Write a function that takes a string as input,
// and returns a copy of that string reversed.
//
// remember that:
// - you can get and set characters in a string at
//   specific indices
//
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a
//   String.reverse() method)
// - use something other than
//
//      "abc".split('').reverse().join('') --> "cba"



function reverse(str){
  var origString = str
  .split("");
  var reverseString = "";
  for (var i = 0; i < origString.length; i++) {
    reverseString = origString[i] + reverseString;
  }
  return reverseString;
}

console.assert(reverse('hello') === 'olleh')
console.assert(reverse('hello, world') === 'dlrow ,olleh')
