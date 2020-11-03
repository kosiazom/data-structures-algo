function addUpTo(n) {
//     let total = 0 ;
//     for (let i = 1; i <= n; i++) {
//        total += i; // do depending on what n is its using n amount of operations. eg if n is 5 that means you have you have 5 additions and 5 assignments etc
//as n grows, the operation grows exponetially with n
//     }
//     return total
// }
return n * (n + 1) / 2 // this solution is time efficient than the previous code this has 3 simple operations so rather than time look t the operations
//operations used multiplication, addition and division
}
console.log(addUpTo(150))