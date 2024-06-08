// Word Frequency Map for a Word Cloud

// A Word Cloud is a visual representation of the frequency of words in a
// string, such as found in a blog post or other article; in a word cloud, the
// most frequently occurring words appear in the largest font size in order to
// do this, the frequency of words must be known.

// Therefore, before we can make a Word Cloud, we have to make what is called a
// Word Frequency Map from of the words. This takes the form of an Object, where
// the keys are unique words and the value of each key is the number of times
// the word occurs.

// To make the Word Frequency Map, we have to convert the text to an array, with
// each item a word. Then we loop through the array of words. every time a
// unique word is found, the object is assigned that word as a new key with an
// initial value of 1.

// The next time the word is encounterd, no new key is made, but rather the
// value of the existing key is incremented by 1.

// The resulting Word Frequency Map can then be used to make a Word Cloud by
// setting the font size of each word based on the frequency, with most frequent
// words biggest. If you wanted to make a full Word Cloud (though outside the
// scope of this assignment), these functions will be useful to build off of.

// Also, since a Word Cloud only contains interesting, important keywords, there
// needs to be a filter that prevents what are known as stopwords from being
// included in the Word Frequency Map. Stopwords include such common words as
// 'the', 'and', 'of', 'on', 'with', etc.

// The file stopwords.js has stopwords that can help with this step, and is
// included in the index.html file. We pass the stopwords variable from that
// file into the function below.

// Finish the function:

function makeWordFreqMap(str, stopwords) {
  // remove punctuation so that "world." and "world" are not saved as separate keys

  // make an array of the words, each word an array item

  // declare a new object

  // if the current word is already an object key, increment the value of the
  // word key by 1

  // else make it a key with an initial value of 1

}

let fairyTaleWordFreq = makeWordFreqMap(fairyTalesText, stopwords);
console.log("fairyTaleWordFreq:", fairyTaleWordFreq);

let treehouseWordFreq = makeWordFreqMap(treehouse, stopwords);
console.log("treehouseWordFreq:", treehouseWordFreq);
