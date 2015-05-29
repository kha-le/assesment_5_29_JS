
      // This logic is unused but was attempted to solve by using array was
      // abandoned due for simple soulotion below
// var findReplace = function(sentence,word,newWord) {
//   var new_array = sentence.split()
//   for (var i = 0; i >= new_array.length; i++) {
//     if (sentence[i] === word) {
//       sentence[i].replace(/word/g, newWord)
//     }
//   };
//   return new_array
// };



var replacer = function(sentence,word,newWord) {
  var oldWord = new RegExp(word, "g");
  var text = sentence
  var new_text = sentence.replace(oldWord, newWord)
  return new_text
};
