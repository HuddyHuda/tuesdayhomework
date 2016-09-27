// START OF LONG 1
//http://jsbin.com/roseboguyu/edit?js,console


function lengths(arrayofstring){

 console.log(arrayofstring.length);

  //need to store the numbers into an array
  var storearray = [];

  for(var i = 0; i < arrayofstring.length; i++){

    //console.log(arrayofstring[i].length);

    storearray.push(arrayofstring[i].length);

  }

  return storearray;


}



var words = ["hello", "what", "is", "up", "dude"]
lengths(words);

console.log(lengths(words));

//END OF LONG 1


//START OF LONG 2
//http://jsbin.com/cebobikozu/edit?js,console

function transmogrifier(num1,num2,num3){

  var totalfirstsecond = num1 * num2;

  var power = Math.pow(totalfirstsecond, num3);

  console.log (power);

 return power;

}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);


//START OF LONG 3
//http://jsbin.com/kicuqiwesi/edit?js,console,output


function wordReverse(stringofwords){

  var str = stringofwords;

var splitted1 = (str.split(" ").reverse().join(" "));

  return (splitted1);

}



function wordReverse2(stringofwords2){

  var str2 = stringofwords2;

splitted2 = (str2.split(" ").reverse().join(" "));

  return splitted2;


}

var words = "Now I know what a TV dinner feels like";
wordReverse(words);


var words2 = "Put Hans back on the line";
wordReverse2(words2);

//END OF LONG 3


//START OF SHORT 1

function maxOfTwoNumbers(num1,num2){

  if (num1 > num2){

   return num1;

  } else{

    return num2;

  }


}

//example

console.log (maxOfTwoNumbers(2,9));
//END OF SHORT 1

//START OF SHORT 4


function sumArray(arrayofnumbers){


    console.log(arrayofnumbers);

  var total = 0;

  for (var j = 0; j < arrayofnumbers.length ; j++){

    total += arrayofnumbers[j];

  }

 console.log (total);

}


function multipleArray(arraymulofnumbers){


    console.log(arraymulofnumbers);

  var totalmul = 1;

  for (var h = 0; h < arraymulofnumbers.length ; h++){

    totalmul *= arraymulofnumbers[h];

  }

 console.log (totalmul);

}


var mulnumbers = [1, 2, 3, 4];
multipleArray(mulnumbers);


var numbers = [1, 2, 3, 4];
sumArray(numbers);





//end of short 4

//start of short 5

var numberOfArguments = function () {
 return arguments.length
}

console.log(numberOfArguments("ironman"));
console.log(numberOfArguments("ironman","pikachu"));


//end of short 5


//start of short6


function reverseString(stringofwords){

  var str = stringofwords;

var splitted1 = (str.split("").reverse().join(""));

  console.log (splitted1);

}

var words = "jag testar";
reverseString(words);

//endofshort6


//start of short7

function findLongestWord(str) {
  var words = str.split(' ');
  var longestLength = 0;
  var longestWord;
  for (var i=0;i<words.length;i++) {
    if (words[i].length > longestLength) {
       longestLength = words[i].length;
       longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


//endofshort7


//start of short8
function filterLongWord (array, int) {
 var longWord = []
 for (var i = 0; i < array.length; i++) {
   if (array[i].length > int) {
     longWord.push(array[i])
   }
 }
 return longWord
}
console.log(filterLongWord(['HappyBirthday', 'Freedom', 'Responsibility', 'Freeze', 'Fame'], 5))

//endofshort8
