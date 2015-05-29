
      // This logic is unused but was attempted to solve by using array was
      // abandoned for simple soulotion below
// var findReplace = function(sentence,word,newWord) {
//   var new_array = sentence.split()
//   for (var i = 0; i >= new_array.length; i++) {
//     if (sentence[i] === word) {
//       sentence[i].replace(/word/g, newWord)
//     }
//   };
//   return new_array
// };



var replacer = function(sentence,oldWord,newWord) {
  var oldWord = new RegExp(oldWord, 'i' + 'g');
  var new_sentence = sentence.replace(oldWord, newWord)
  return new_sentence
};

$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var oldWord = $("input#oldWord").val();
    var newWord = $("input#newWord").val();
    var result = replacer(sentence,oldWord,newWord)

    $(".result").text(result);


    $("#result").show();
    event.preventDefault()

  });
});
