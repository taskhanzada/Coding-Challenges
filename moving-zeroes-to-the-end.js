// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // TODO: Program me
  let count = 0;
  let ans = arr.filter(x => {
     if(x === 0){
      count++
    }
    return x !== 0;
   
  })

  for(let i = 0; i < count; i++){
    ans.push(0)
  }
  return ans;
}



moveZeros([false,1,0,1,2,0,1,3,"a"])
