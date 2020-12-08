function mergeArrays(a, b) {
    // Write your code here
    //input example 
    // a = [1,2,3]
              //i.       results -> [1,2,2,3]  
    // b = [2,5,5]
          //j
    //edgecase
    //if(a.length !== b.length) return null ...if we are to assume they must have the same length

let results = []
//pointers
let i = 0
let j = 0

//we should create a loop to loo p both arrays
//if j is greater than i then push i into the results array and move up one
while(i < a.length && j < b.length) {
    if(b[j] > a[i]){
        results.push(a[i])
        i++
    } else{
        results.push(b[j])
        j++
    }
}
//push remaining elemenets into the array 
while(i < a.length){
    results.push(a[i])
    i++
}
 while(j < b.length){
    results.push(b[j])
    j++
}
return results 

//Grouping digits

function minMoves(arr) {
    // Write your code here
    
    //sample
    //arr=[0,1,0,1]
    
    //edgecase: elements must be 1 || 0
    //n is number of step it takes to move
    let n = 0, i = 0
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] === 1) {
          n += j - i;
          i++
      }
    }
return n
}
}
//Triplets 
//GIven an array of