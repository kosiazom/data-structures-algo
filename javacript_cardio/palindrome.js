//Chanllenge 2: Validate a Palindrome
//return true if palindrome and false if not
//ex. isPalindrome('racecar') === 'true, isPalindrome('hello) ===false

function isPalindrome(str) {
    //reverse the word 
    //then if statement if revereserve word is equal to given string
    // let reverse = str.split('').reverse().join('')
    // console.log(reverse)

    // if(reverse === str ) {
    //     console.log('true')
    // } else {
    //     console.log('false')
    // }
//////////////////////////////////////////////////// for loop solution
let revString = "";
for (let i = str.length - 1; i >= 0 ; i --) {
    revString = revString + str[i];
    // console.log(revString)
}
    // if (str === revString){
    //     console.log("true")
    // } else {
    //     console.log("false")
    // }
    return revString === str


 
}
//challenge 3 reverse an integer
//return an integer in reverse
//ex. reverseIntegr(25) ==> 52
function reverseInteger(int) {
    //convert int to string and reverse and convert to number
    const revString = int.toString().split('').reverse().join('')
    
    return parseInt(revString) * Math.sign(int) //if there is a sign with the number but only works with parse int and not number

}

//CHALLENGE 4: CAPITALIZE LETTERS
//return a string with the first letter of every word capitlized
//ex. capitalizeLetters('i love to eat!')  === ("I Love to Eat!")
function capitalizeLetters(str) {
    
}


const output = reverseInteger(-563)
console.log(output)
// isPalindrome("alex")
