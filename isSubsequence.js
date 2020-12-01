// write a function called isSubsequence which takes in 2 strings and checks wheter the characters in the fitst string form a 
// subsequece of the chatacters in the secon strin. In other words the functuin should check wheter the characters in the 
// first string appeart in the second string, without changing their order

// function isSubsequence(str1, str2){
//     var i = 0
//     var j = 0 
//     if(str1 === "") return true;
//     while(j < str2.length){
//         if(str2[j] === str1[i]) i++;
// //         console.log(str2[j])
// //         console.log(str1[i])
//         if (i === str1.length) return true;

//         j++
//     }
//     return false
// }

function isSubsequence(str1, str2) {
    if (str1 === "") return true;

    let i = 0 //pointer for the first one

    for(let j = 0; j < str2.length; j++ ){
        if(str1[i] === str2[j]){ //if they are equal we can move on to the next index
            i++
        }
        if(i >= str1.length){
            return true
        }
    }

         return false 
}
isSubsequence('abc', 'acb')
isSubsequence('hello', 'hello world')