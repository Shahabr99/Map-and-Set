//Maps and Sets Exercises
//Quick Question one
new Set([1, 1, 2, 2, 3, 4]); //[1,2,3,4]
////////////////////////////////

//Quick question 2
[...new Set("referee")].join("");

//ref
//////////////////////////////////
//Quick question three
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// /{Array(3) => true, Array(3) => false}
//////////////////////////////
//Has duplicates
function hasDuplicates(arr) {
  const result = new Set(arr);
  return [...result].length < arr.length ? true : false;
}
hasDuplicates([1, 3, 2]);
/////////////////////////////
//vowel count
function getVowel(char) {
  const vowels = "aieou";
  return vowels.indexOf(char) !== -1;
}

function vowelCount(str) {
  const myMap = new Map();
  for (let letter of str) {
    if (getVowel(letter)) {
      if (myMap.has(letter)) {
        myMap.set(letter, myMap.get(letter) + 1);
      } else {
        myMap.set(letter, 1);
      }
    }
    console.log(myMap);
  }
}
vowelCount("awesome");
