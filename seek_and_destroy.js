function destroyer(arr) {
  // Remove all the values
 let newArr = [].slice.call(arguments);
 let newArr2 = [];
 let newArr3 = [];
 let finalArr = [];

 
 for(var i =0; i < newArr[0].length;i++){
  newArr2.push(newArr[0][i]);
 }
for(var j = 1; j < newArr.length; j++){
   newArr3.push(newArr[j]);
}

for(var t = 0; t < newArr2.length; t++){
  if(newArr3.indexOf(newArr2[t]) === -1){
    finalArr.push(newArr2[t]);
  }
}return finalArr;
