The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {


 let newArr = str.split(" ");
 let updatedArr = newArr.map((x) => {
   return x.charAt(0).toUpperCase() + x.slice(1);
 })
 let ans = updatedArr.join("")
if(ans.length !== 0 && ans.length < 140){
  return '#' + ans;
} else{
  return false
}

}
