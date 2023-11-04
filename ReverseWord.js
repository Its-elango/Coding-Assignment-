function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];

  for (const word of words) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWords.push(reversedWord);
  }

  const reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}

const inputSentence = prompt("Enter a sentence:"); // Prompt the user for input
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
