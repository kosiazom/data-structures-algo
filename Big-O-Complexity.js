function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) { // this would be an O(1) a constant 
        console.log(i);
    }
}

logAtMost10(15)

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i); 
    }
}
logAtLeast10(20)
//this would be an O(n) because as n increase so does the runtime

function onlyElementsAtEvenIndex(array) {
    
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
