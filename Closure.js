(function(){
  console.log("start");
  
  // curried function   
  function curried(arg1) {
    return  function(arg2) {
      // closure on arg1
      return arg1+arg2; 
    };    
  }

  //same curried function in using arrow
  var arrowed = arg1 => (arg2) => arg1 + arg2;

  console.log(curried(100)(20));  
  console.log(arrowed(30)(20));
}());