function reportScores(arr) {

    let scores = {}; 
  for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 300 && arr[i]<= 599){
            arr[i] = "poor"
        }
        if(arr[i] >=700 && arr[i] <= 749) {
            arr[i] = 'good'
        }
        if(arr[i] >= 800) {
            arr[i] ='elite'
        }
    }
    console.log(arr)
}

reportScores([300, 725,700, 800])