// 04.04 Lab Exercises

// given ANY string of x number of chars, insert 'COOL' as the next to the last word
var phrase1 = "Say hello world to my little friend.";
var phrase2 = "Snoopy's nickname is Joe right?";
var phrase3 = "These are a few of my favorite things.";
// where does cool need to go? right between the last word and all that comes before
// what string method weill return (get) the last word of each phrase?
console.log(phrase1.indexOf(" ")); // what does this give you? (index of first space)
console.log(phrase1.lastIndexOf(" ")); // this gives you index of LAST space
// use lastIndexOf and slice to accomplish this task
// expected output: Say hello world to my little cool friend.
// Snoopy's nickname is Joe cool right?
// These are a few of my favorite cool things.
var lastIndxSp = phrase1.lastIndexOf(" "); // returns an int
var coolPhrase =
  phrase1.slice(0, lastIndxSp) + " cool " + phrase1.slice(lastIndxSp + 1);
console.log(phrase1);
console.log(coolPhrase);

// How to work one more string method into the mix -- chain on another method at the end
// so, let's still make cool the next to the last word, but now replace world with empty string
var lastIndxSp = phrase1.lastIndexOf(" "); // returns an int
var coolPhraseNoWorld =
  phrase1.slice(0, lastIndxSp) + " cool " + phrase1.slice(lastIndxSp + 1);
console.log(phrase1);
console.log(coolPhrase);
console.log(coolPhraseNoWorld);

var phrase1 = "Say hello world to my little friend.";
var lastIndxSp = phrase1.lastIndexOf(" "); // returns an int
var newPhrase1 =
  phrase1.slice(0, lastIndxSp) + " cool " + phrase1.slice(lastIndxSp + 1);
console.log(newPhrase1);

var phrase2 = "Snoopy's nickname is Joe right?";
var lastIndxSp = phrase2.lastIndexOf(" "); // returns an int
var newPhrase2 =
  phrase2.slice(0, lastIndxSp) + " cool " + phrase2.slice(lastIndxSp + 1);
console.log(newPhrase2);

// var phrase3 = 'These are a few of my favorite things.';
var lastIndxSp = phrase3.lastIndexOf(" "); // returns an int
var newPhrase3 =
  phrase3.slice(0, lastIndxSp) + " cool " + phrase3.slice(lastIndxSp + 1);
console.log(newPhrase3);

// escaping a string
// var quote = "Hamelet said "To be or not to be""; // double double quotes gives an error

// to avoid errors with quotes inside quotes (or apostrophes), mix-and-match
var quote = 'Hamelet said "To be or not to be"';
console.log(quote);

var quote = "Hamelet said 'To be or not to be'";
console.log(quote);

// ESCAPE QUOTE by putting a backslash in front of the quote (this "turns it off")
var quote = 'Bill said "I can\'t believe this"';
console.log(quote);

// CHALLENGE: fix the following string TWO ways:
// my mixing-matching single-double quotes AND by escaping quote (or apostrophe)

// var quote = 'These aren't the droids you are looking for';
var mixMatchQuote = "These aren't the droids you are looking for";
var escapeQuote = "These aren't the droids you are looking for";
console.log(mixMatchQuote);
console.log(escapeQuote);

// CONCATENATION of VARIABLES
var firstName = "Brian";
var lastName = "McClain";
var faveFruit = "apples";
var faveColor = "blue";
var faveNum = 13;
// concatenate the following string using the variables above:
// Hi, my name is Brian McClain. My favorite fruit is apples,
// my favorite color is blue and my favorite number is 13.
// turn this string into a concatenation with the variables
// "Hi, my name is Brian McClain. My favorite fruit is apples, my favorite color is blue and my favorite number is 13."

var concatenatedIntro =
  "Hi, my name is " +
  firstName +
  " " +
  lastName +
  ". My favorite fruit is " +
  faveFruit +
  ", my favorite color is " +
  faveColor +
  " and my favorite number is " +
  faveNum +
  ".";
console.log("concatenatedIntro:", concatenatedIntro);

var pet = "cat";
var age = 3;
var petName = "McFluffy";
var food = "tuna";
var toy = "ball of yarn";
// use string concatenation with the above variables to log the following output in the console:
// output:

var catTalk =
  "Meow! My name is " +
  petName +
  ". I am a " +
  age +
  "-year-old " +
  pet +
  ". I like " +
  food +
  " and playing with my " +
  toy +
  ".";
// use the3 above concatenatedIntro example for guidance.
console.log("catTalk:", catTalk);

// string interpolation: an alternative to concatenation because
// sometimes there are just too many plus signs and quotes to deal with~
var catTalk = `Meow! My name is ${petName}. I am a ${age} -year-old ${pet}. I like ${food} and playing with my ${toy}.`;
console.log("catTalk:", catTalk);
// CONVERT string concatenation to string interpolation
// 1.) get rid of ALL quotes and plus signs (+)
// 2.) wrap all in backticks
// 3. wrap all vars in ${var}

// SEE 04.04 Lab Solution
