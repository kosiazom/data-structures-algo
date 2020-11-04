class Snapshot {
    constructor(array) {
      //creating a copy of the array here
      let copyArr = [...array]
      this.array = array;
    }
    
    restore() {
      return this.array;  
    }
  }
  
  var array = [1, 2];
  var snap = new Snapshot(array);
  array[0] = 3;
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"
  array.push(4);
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"
  //Modify the implemation of the snapshot class so that an arrary stored in snapshot 


  function clickRedirectHandler(event) {
    // Handles the click event for the <a> element
    //first find the element that needs a listener on it, sine there is no class or id use said method
    
    let links = document.querySelectorAll('a')
    
    //loop thru links and add listeners to links
    
    for(let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        setRedirectConfirmationDialogs(event)
      })
    }
    
  }
  
  function setRedirectConfirmationDialogs() {
    // Registers clickRedirectHandler for all <a> elements on the page
    const response = confirm(links[i].href);
        if (response === false) {
          event.preventDefault()
  }
  }