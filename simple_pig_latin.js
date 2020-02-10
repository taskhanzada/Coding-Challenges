// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let strArr = str.split(' ');
  let pigArr = strArr.map(function(element) {
    if(element !== "!" && element !== "?"){
  return (element.slice(1) + element.slice(0,1) + 'ay'); 
    } else {
      return element;
    }

  });
  let finalpig = pigArr.join(' ');
  return finalpig;
}
