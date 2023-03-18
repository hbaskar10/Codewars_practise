// Complete the function which converts a binary number (given as a string) to a decimal number.
// sample tests: 

// describe("Example Tests", () => {
//     [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
//   });

  
// parseInt(number, 2) will convert the number in binary to decimal, toString() method will help to return the final as string
// parseInt(binary,radix)

// function BintoDec(bin) 
// {

//     return parseInt(bin, 2)
// }

BintoDec = bin => parseInt(bin, 2)

