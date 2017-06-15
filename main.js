// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(x,y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(x, y, z){
  if (x > y > z) {
    return x;
  } else if (y > z > x) {
    return y;
  } else if (z > x > y) {
    return z;
  }
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  char = char.toLowerCase();
  if (char == "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  }  return false;
  }


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(x,y){
  var total = x + y;
  return total;
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(x,y,z){
  return ((x + y+ z) / 3);
}



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(hi){
  return (hi.length);
}

getLength("hi");

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(x,y) {
  if (x < y) {
    return true;
  } else {
    return false;
  }
}

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name) {
  return ("Hello," + name);
}

greet("Annie");

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(animal, verb, descript, object) {
  var fullSen = "The" + " " + animal + " " + verb + " " + "over the" + " " + descript + " " + object;
  return fullSen;
}


madlib("dog", "leaped", "red", "box");
