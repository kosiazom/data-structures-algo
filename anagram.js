function validAnagram(str1, str2){
    //compare the lenght of the string
    if(str1.length !== str2.length){
        return false
    }
    //create an object to check for frequency
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of str1){
         /*We loop through each character in the string. if the character 
           already exists in the map, increase the value, otherwise add it 
           to the map with a value of 1 */
        frequencyCounter1[val] = (frequencyCounter1[val] + 1 || 1 )
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] + 1 || 1 )
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
      if (JSON.stringify(frequencyCounter1) === JSON.stringify(frequencyCounter2)){ //objects are reference types so you cant just use === try JSON.stringify
           console.log(frequencyCounter1)
          return true
      } else {
          return false
      }
   }
     
   // function validAnagram(stringA, stringB){
   //     //compare the length of strings
   //     if(stringA.length !== stringB.length){
   //         return false
   //     }
   //     //create and object to compare
   //     let lookup = {}
   
   //     for(let i = 0; i < stringA.length; i++){
   //         let letter = stringA[i]
   //         //if letter exist, incremement otherwise set key to 1
   //         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
   //     }
   //     console.log(lookup)
   //     for (let i = 0; i < stringB.length; i++){
   //         let letter = stringB[i]
   //         //cant find letter or letter is zero then its not an anagram
   //         if(!lookup[letter]) {
   //             return false;
   //         } else {
   //             lookup[letter] -= 1
   //         }
   //         return true
   //     }
   // }
   validAnagram('anagram', 'nagaram')
   
   validAnagram("fried", "fired")
   validAnagram("theeyes", "theysee")
   // validAnagram("car", "tar")