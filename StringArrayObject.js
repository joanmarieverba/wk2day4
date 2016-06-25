// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {
//think about deleting sort here
  var objectName = {};
  var arrString = str.replace("'").split(', ').sort();
  for (var i = 0; i < arrString.length; i++){
    var twoNames = arrString[i].replace("'").split(' ');
//    console.log(twoNames);
    firstName = twoNames[0];
    lastName = twoNames[1];
    objectName[firstName] = lastName;

  }
    return objectName;
}


var results = names("George Washington, John Adams, Kanye West");
console.assert(results.George === "Washington");
console.assert(results['John'] === "Adams");
console.assert(results['Kanye'] === "West");


//var obj = {};
//obj['George'] = 'Washington'
//result:
//obj = {
//  George: "Washington"
//}
