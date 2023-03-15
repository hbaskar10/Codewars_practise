// Sam Harris => S.H

// patrick feeney => P.F

// Solution 1 

function abbrevName(name){
    const name1 = name.split(' ');
    //split puts each word in a string in an array, so name1 is an array here
    return `${name1[0][0].toUpperCase()}.${name1[1][0].toUpperCase()}`;
  }

//   Refractored code

function abbrevName(name){
    const name1 = name.split(' ');
    //split puts each word in a string in an array, so name1 is an array here
  //   return `${name1[0][0].toUpperCase()}.${name1[1][0].toUpperCase()}`; as this is not scalable for further inputs
   return name1.map(i =>{return i[0].toUpperCase()}).join('.');
  
  }



