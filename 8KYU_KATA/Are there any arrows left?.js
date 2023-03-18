// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// The expected result is a boolean, indicating whether you have any good arrows left.

// if you try to access object key it will return the value like here

//array.some method

function anyArrows(arrows){
    // arrow it
    return arrows.some(i=>!(i.damaged));
  }
