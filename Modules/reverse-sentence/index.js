function reverse(sentence) {
  const wordsArray = sentence.split(" ");
  const reversedArray = wordsArray.reverse();
  return reversedArray.join(" ");
}
module.exports = reverse;
