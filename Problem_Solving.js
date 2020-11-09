// Coming up with examples helps you understand the problem better 
// Examples are user stories, unit tests
// 1. Start with Simple Examples
// 2. Progress to More complex examples
// 3. Explore Examples with Empty Inputs
// 4. Explore Examples with Invalid inputs 
// Write a function that takes in a string and returns counts of each character in the string 

//function charCount(str) {
    //make object to return at end
    //loop over string, for each character …
        //if the char is  a number/letter AND is a  key in object, add 1 to count
        //if the char a number/letter AND is NOT a  key in object, add it to the object and set value to 1
        // if char is something else (space, period, etc.) don’t do anything  
    //return object at end
   // }

    //function charCount(str) {
        //do something
        //return an object with keys that are lowercase alphanumeric characters in the string; values should be the count for those characters
      //  }

            function charCount(str) {
//make object to return at end
    let result = { }
//loop over string, for each character …
    
    for(let i = 0 ; i < str.length; i++) {
        let char = str[i].toLowerCase() 
 //if the char is  a number/letter AND is a  key in object, add 1 to count
        if (result[char] > 0) {
                result[char] ++;
//if the char a number/letter AND is NOT a  key in object, add it to the object and set value to 1
    } else {
        result[char] = 1
    }
}
    // if char is something else (space, period, etc.) don’t do anything  
//return object at end
return result;
}
charCount("Hello there")
function charCount(str) {

    let obj = {}
    
    for(let i = 0 ; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {//checking to see if something is alpha-numerical
           
        if (obj[char] > 0) {
                obj[char] ++;
    } else {
        obj[char] = 1
    }
     //refactor obj[char] = ++obj[char] ||  1
}
}
return result;
}
charCount("Hello there!")
            