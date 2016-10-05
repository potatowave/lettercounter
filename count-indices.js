function countLetters(string) {
  var lowerString = string.toLowerCase();
  var countedObject = {};


  //console.log(">>>>" + splitString[0]);

  for (var i = 0; i < lowerString.length; i++) {
    var char = lowerString.charAt(i);
    var index = i;

    if (countedObject[char]) {

      countedObject[char] = countedObject[char] + ", " + i;

    } else {

      countedObject[char] = i;


      //console.log(countedObject[character] + "   " + countedObject[index])
    }


  }
  return countedObject

}



console.log(countLetters("lighthouse in the house"));


