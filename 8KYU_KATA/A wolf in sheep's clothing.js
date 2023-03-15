
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// 7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


function warnTheSheep(queue) {
    const idx = queue.indexOf('wolf')
   //  if(queue.length-1 === idx) {
   //    return "Pls go away and stop eating my sheep"
   //  } else {
   //    return `Oi! Sheep number ${(queue.length-1) - idx}! You are about to be eaten by a wolf!`
   //  }
    return queue.length-1 === idx ? "Pls go away and stop eating my sheep" :  `Oi! Sheep number ${(queue.length-1) - idx}! You are about to be eaten by a wolf!`
   }