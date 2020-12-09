function reportScores(arr) {

    let scores = {}; 
    let len = arr.length
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
    console.log(Object.entries(scores))
    console.log(scores)
}

reportScores([300, 725,700, 800])