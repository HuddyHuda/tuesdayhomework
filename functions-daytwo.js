// START OF LONG 1


var words = ["hello", "what", "is" , "up", "dude"];

function arrayOfWords(wordy){

var storeLength;
storeLength = [];

words.forEach (function (wordy){
storeLength.push(wordy.length);
});

//console.log(storeLength);
  return storeLength;

};

console.log(arrayOfWords(words));


















//END OF LONG 1

//START OF SHORT 4


//for sumArray
var sumArr = [1, 2, 3, 4];

var totalSum = sumArr.reduce (function (x, y){

return x + y;

});

console.log (totalSum);



//for multipleArray

var mulArr = [1, 2, 3, 4];

var totalMul = mulArr.reduce (function (x, y){

return x * y;

});

console.log (totalMul);








//end of short 4


//start of short7

var sentence = "The quick brown fox jumped over the lazy dog" ;
sentence = sentence.split(" ");

 var long = function (a, b) {
 if (a.length > b.length) {
   return a
 } else {
   return b
 }
}

var findLongestWords = function (strings) {
 return strings.reduce(long)
}

console.log(findLongestWords(sentence))

//endofshort7


//start of short8


var filterLongWords = function (arr, x) {
 return arr.filter(function length (word) {
   return word.length > x
 })
}

console.log(filterLongWords(sentence, 4))



//endofshort8
