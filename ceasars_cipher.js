//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) { // LBH QVQ VG!
var arr = [];
var arr2 = [];
var arr3 = [];
  for(var i = 0; i < str.length; i++){
   arr.push(str.charCodeAt(i));
  }
  for(var j = 0; j < arr.length; j++){
    if(arr[j] >= 65 && arr[j] <= 77){
    arr2.push(arr[j] += 13); 
    } else if(arr[j] >= 78) {
      arr2.push(arr[j] -= 13)
    }
      else {
      arr2.push(arr[j]);
  }
  }
  for(var k = 0; k < arr2.length; k++){
    
    arr3.push(String.fromCharCode(arr2[k]));
  }return arr3.join("");

 
  
 
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
