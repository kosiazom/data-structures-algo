//this is where the pointers come in  so we will start from the beginning of array and the end of array.
function sumZero(arr){
    let left = 0
    let right = arr.length - 1 //end of array
    while (left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0) {
            right--;
        }else{
            left++
        }
    }
}
sumZero([-4,-3,-2,-1,0,1,2,10])