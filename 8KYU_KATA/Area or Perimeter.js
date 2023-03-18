// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// 6, 10 --> 32
// 3, 3 --> 9

// square - a square rectangle - 2 (l+b)

const areaOrPerimeter = function(l , w) {
    return (l===w) ? (l*w) : (2*(l+w)) 
   };