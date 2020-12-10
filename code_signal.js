function reportScores(arr) {

    let scores = {}; 
    let len = arr.length
    let results = []
  for(let i = 0; i < len; i++) {
        if(arr[i] >= 300 && arr[i]<= 599){
            arr[i] = "Poor"
            //check to see if key already exists
            scores[arr[i]] = (scores[arr[i]] || 0) + 1
        }
        if(arr[i] >=700 && arr[i] <= 749) {
            arr[i] = 'Good'
            scores[arr[i]] = (scores[arr[i]] || 0) + 1
        }
        if(arr[i] >= 800) {
            arr[i] ='Elite'
            scores[arr[i]] = (scores[arr[i]] || 0) + 1
        } 
    }
    //sort  the array from greatest to least 
    const sorted = Object.entries(scores).sort(function(a,b) {
        return b[1] - a[1];
    })
    //after sorting now loop thru the array and grab the 2nd element of the inner element and convert that to percentage
    for( let i = 0; i < sorted.length; i++){
        let percentNumber = `${(((sorted[i][1])/arr.length) * 100).toFixed(2)}%`
        // let string = sorted[i].toString()
        //assign the 2nd elements of array to percent number
        sorted[i][1] = percentNumber
       //   console.log((sorted[i]))
        // console.log(percentNumber)
    }
    //get rid of the inner array with fromEntries
    // console.log(Object.fromEntries(sorted))
    //use JSON.stringgy to turn keys into strings
    let stringedResult = JSON.stringify(Object.fromEntries(sorted))
    //do a for in loop to loop thru object and and push into results array
    //  for(const value in stringed) {
  //       results.push(stringed[value])


  //this is where i would ask for help because Ive tried Object.entries to return array but it doesnt return it
 console.log(stringedResult)
  return stringedResult
    
  // console.log(stringed)
    
    
   
}

reportScores([300, 725,700, 800])