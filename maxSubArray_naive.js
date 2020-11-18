// function maxSubarraySum(arr, num) {
//     if (num > arr.length){
//         return null;
//     }
//     var max = -Infinity; //accting for array with negative numbers
//     for (let i = 0; i > arr.length - num + 1; i++){     //this is the last place you can start your sum
//          temp = 0; //temp will store our sum and compare it to max
//         for (let j = 0; j < num; j++){
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//         console.log(temp, max)
//     }
//     return max
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){//num is the number of digits
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
      console.log(temp, max)
    }
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)