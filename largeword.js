function LongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';
  let maxLength = 0;
  for (let word of words) {
    const cleanWord = word.replace(/[^\w]/g, '');
    if (cleanWord.length > maxLength) {
      maxLength = cleanWord.length;
      longestWord = cleanWord;
    }
  }

  return longestWord;
}
const sentence = "Hello, this is a sentence with different length words.";
console.log(LongestWord(sentence));
