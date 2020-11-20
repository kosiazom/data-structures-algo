//determine if there is a pair of values in the array
//where the avetage of the pair equals the target averagePair
function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1 
  
    while(start < end) {//because its an assorted array
      let avg = (arr[start] + arr[end])/2 
  
    if(avg === target) return true
    else if(avg < target ){ //if the avg is less than then increment one
        start ++
    }
      else end -- 
    }
    return false
  }
  averagePair([1,2,3], 2.5)
  averagePair([1,3,3,5,6,7,10,12,19], 8)