


function countLetters(string) {
  var splitString = string.split(" ").join("").toLowerCase();
  var countedObject = {};

  for (var i = 0; i < splitString.length; i++) {
    var character = splitString.charAt(i);

    console.log(countedObject[character])

    if (countedObject[character]) {
      countedObject[character]++;
    } else {
      countedObject[character] = 1;
    }
  }
  return countedObject

}



console.log(countLetters("lighthouse in the house"));