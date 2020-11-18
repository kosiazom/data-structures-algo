//checks whether there are any duplicates in the 
//arguments passed in

// function areThereDuplicates(){

//     let counterObj = {};
//     for(let val of arguments){
//         counterObj[arguments[val]] = (counterObj[arguments[val]] || 0) + 1
//     }
//     for(let key in counterObj){
//         if(counterObj[key] > 1) return true
//     }

//     return false
// }

// areThereDuplicates(1,2,3)

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  
  }
  
  areThereDuplicates(1,2,2)