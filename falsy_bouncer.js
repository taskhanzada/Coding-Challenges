//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let pee = arr.filter(function(poop){
    return Boolean(poop);
  }); return pee
  

}

bouncer([7, "ate", "", false, 7, 7, ]);
