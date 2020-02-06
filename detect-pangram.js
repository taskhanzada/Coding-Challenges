// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  //...
 let key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
  let blue = string.toLowerCase();
 let red = blue.split("");

 let ans = key.filter((char) =>{
  return red.indexOf(char) === -1;
 })
 
 return ans.length === 0;
}
isPangram("The quick brown fox jumps over the lazy dog.")
