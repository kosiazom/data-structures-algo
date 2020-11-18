// //Write a function called sameFrequency. 
// //Given 2 positive integers, findout if the two numbers have the same frequency of digits

// function sameFrequency(num1, num2){
//     //edge case same data type 
//     if(typeof num1 !== typeof num2) return null
//  //creating the object tht will do the counting
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     for (let val of num1) {
//       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for (let val of num2) {
//       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }

//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)
//     for (let key in frequencyCounter1){
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) return false
//     } 
//     return true;
// }



// sameFrequency("182","218")
// sameFrequency("3589578", "5879385")
sameFrequency("22","222")

//Another Solution 

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    //edgecase if lenght isnt same dont even bother
    if(strNum1.length !== strNum2.length) return null

    let counter1 = {};
    let counter2 = {};

    for(let i = 0; i < strNum1.length; i++){
        counter1[strNum1[i]] = (counter1[strNum1[i]] || 0) + 1
    }

    for(let j = 0; j < strNum1.length; j++){
        counter2[strNum2[j]] = (counter2[strNum2[j]] || 0) + 1
    }

    for(let key in counter1){
        if(counter1[key] !== counter2[key]) return false
    }
    return true
}

sameFrequency(281, 182)
sameFrequency(3589578,5879385)