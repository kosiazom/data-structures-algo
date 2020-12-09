function twoSum( nums, target) {
//find the sum of 2 indicies that gives you the target

//create a storage such as an object
//loop through the array and grab an element and subtract that by the target

const previousNumbers = {};
const len = nums.length;

//loop through the array and 
    for(let i = 0; i < len; i++) {
        let currentNumber = nums[i];
    // then find the difference of the target number and element
    let differenceValue = target - currentNumber
    
    //look to see if the differenceValue key already exists in the object
    let index2 = previousNumbers[differenceValue]
    console.log(previousNumbers)
    console.log(index2)

        if (index2 != null ) {
            return [index2, i]
        } else {
            previousNumbers[currentNumber] = i
        }
    }
}
console.log(twoSum([2,7,11,15], 9))