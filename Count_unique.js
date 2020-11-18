  //Implement a function called countUniqueValues, which accepts a sorted array,
    // and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted 
function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
  
      let i = 0
        for(let j = 1; j < arr.length; j++){
            if(arr[i] !== arr[j]){
                i++;
                //so if i doesnt equal j then move onto the next index and set i to equal j
                arr[i] = arr[j]
            } 
            console.log(i, j)
         }
         return i + 1
  }                              
  countUniqueValues([1,2,3,4,5,6,7,5,5,5,6,7]) 
                  //        O(n) because we are only looping once                  