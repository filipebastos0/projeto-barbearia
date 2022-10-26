fetch('https://eqweq.com')
.then(res.JSON())
.then(data => {console.log(data)})



function checkObj(obj, checkProp) {
    // Only change code below this line
    let haveProp = obj.hasOwnProperty(checkProp);
    let propName = obj.checkProp;
    let strName = JSON.stringify(propName);
  
    if(haveProp){
      return strName;
    }
  
    return "Not Found";
    // Only change code above this line
  }