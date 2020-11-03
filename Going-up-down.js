function countUpandDown(n) {
    console.log("Going up!");

    for (let i = 0; i < n ; i++) { //We have a O(n) here as n grows this loop grows
        console.log(i);
    }

    console.log("At the top! \nGoing down...");
    for (let j = n - 1; j >= 0; j--) { //We have a O(n) here as n grows this loop grows
        console.log(j)
    }

    console.log("Back down. Bye!")
}
countUpandDown(10)

function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
           console.log(i,j)
       
        }
    }
}
printAllPairs(2)