//ASSIGNMENT

/**
Given a non-negative integer, return an array or
list of the individual digits in order.

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
**/

function digitize(n) {
  var intToString = n.toString();
  var arrNumberString = intToString
    .split("");
  for (var index=0; index < arrNumberString.length; index++) {
        arrNumberString[index] = parseInt(arrNumberString[index],10);
      }
  return arrNumberString;
}

console.assert(digitize(123)[0] === 1);
console.assert(digitize(8675309)[6] === 9);


//change integer to string
//var intAsString = i + ""
//var intAsString = number[i].toString();


//change string to number
//parseInt(var,10)
