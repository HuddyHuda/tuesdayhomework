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
var numbers = [1,2,3,4];

function sumArray (addynumber) {

var sum;
sum = 0;


numbers.forEach(function addynumber(value) {
  sum += value; }

);

  //console.log(sum);
     return sum;

};

console.log(sumArray(numbers));


//for multipleArray

var numbers = [1,2,3,4];

function mulArray (mulnumber) {

var mul;
mul = 1;


numbers.forEach(function mulnumber(value) {
  mul *= value; }

);

  //console.log(sum);
     return mul;

};

console.log(mulArray(numbers));







//end of short 4


//start of short7

var str = "The quick brown fox jumped over the lazy dog";



function findLongestWord(longword){

var res;
res= str.split(" "); // split the string into an array of words with separator "space"
var longest = res.reduce(function(a,b) { // a is what we want to compare; b is the previous compared string
    if (a.length > b.length) { // if the new string is longer
        return a; // the new string is the longest string
    } else {return b;} // otherwise the old string is still the longest
})

     return longest;


};

findLongestWord();

console.log(findLongestWord(str));

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
