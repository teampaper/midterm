var factorial = function(value){
  if (Number.isFinite(value) == false){
    return null;
  } else if(value < 0){
    return null;
  } else if(value == 0){
    return 1;
    return null;
  } else if(value > 0){
    var tmp = Math.floor(value)
    return (tmp * factorial(tmp - 1));
  } else {
    return null;
  }
}
