//Proudly stolen from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript.
//Author https://www.educative.io/profile/view/5405507787423744 "Programmer Bytes"!
function generateRandom(maxLimit = 100){
    let rand = (Math.round(Math.random()) * 2 - 1) * maxLimit;
    console.log(rand); // say 99.81321410836433
  
    rand = Math.floor(rand); // 99
  
    return rand;
  }