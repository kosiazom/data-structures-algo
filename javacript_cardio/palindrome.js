//CHALLENGE 1: REVERSE A STRING
// return a reversed string
function reverseString(str){
    let revString = str.split('').reverse().join('')
    return revString

}

//Chanllenge 2: Validate a Palindrome
//return true if palindrome and false if not
//ex. isPalindrome('racecar') === 'true, isPalindrome('hello) ===false

function isPalindrome(str) {
    //reverse the word 
    //then if statement if reversed  word is equal to given string
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
    
    //     const strArr = str.toLowerCase().split(' ');// extra space between the seperator so it can seperate the words
    //    // console.log(strArr)

    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1) //concatenating and adding the rest. substring(1) will add the rest of the letters
    //     // console.log(strArr[i])
    // }

    // return strArr.join(' ');


    /////////////////////////////////////// #2 solution with MAP
    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(word =>  word[0].toUpperCase() + word.substring(1))
    // .join(' ')

    ///////////////////////////////////// #3 soln with regex

    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    });
    
}

//Challenge 5: Max Character 
//return the character that is most common in the string
// maxCharacter("interviewee") => 'e'
function maxCharacter(str) {
    //creat an object counter
    //create a loop to see if index exist
    const frequencyCounter = {};
    let maxNum = 0; // will be the number that will be returned
    let maxChar =""; //the character with max occurences

    for(let char of str){ 
    //    frequencyCounter[str[i]] = (frequencyCounter[str[i]] || 0 ) + 1 
    if( frequencyCounter[char] ) {
        frequencyCounter[char]++
    } else {
        frequencyCounter[char] = 1
    }       
};
    for(let char in frequencyCounter) {
        //debugger;
        if (frequencyCounter[char] > maxNum) {
            maxNum = frequencyCounter[char]; //if the character is greater set that to equal maxNum
            maxChar = char;
            // console.log(maxChar)
        }
    }; 
    return maxChar
};
//CHALLENGE 6: FIZZBUZZ
//Write a progrm that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz"
//for mulitiples of 5 print "Buzz". For numbers that are both multiples of 3 & 5 print "FizzBuzz"
//fizzBuzz([1,2,3,4,5,6,7,8,9,10]) ===> 1, 2, Fizz, 4, "buzz", "fizz", 7, 8, "fizz", buzz,
function fizzBuzz(){
    //create a loop 
    //check to see if value of index is a multiple of 3 if so it should be fizz etc
    //return array
    for (let i = 1; i <= 100; i++){
        // if(arr[i] % 3 === 0 && arr[i] %  5 === 0){
        //     arr[i] = "FizzBuzz"
        // } else if (arr[i] %  5 === 0) {
        //     arr[i] = "Buzz"
        // } else if (arr[i] % 3 === 0){
        //     arr[i] = "Fizz"
        // }
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if(i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }

    };
    // return arr
};

///////////////////////////////////////Session #2///////////////////////////////////////////S


const output = reverseString("interview")
console.log(output)
// isPalindrome("alex")
