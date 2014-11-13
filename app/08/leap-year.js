var leapYear = function(value){
  if (Number.isInteger(value) == false){
    return false
  } else if (value == 0){
    return false;
  } else if (value < 0){
    return false;
  } else if (value % 1 != 0){
    return false;
  } else if (value % 400 == 0){
    return true;
  } else if (value % 4 == 0 && value % 100 != 0 && value % 400 != 0){
    return true;
  } else if (value % 4 != 0){
    return false;
  } else{
    return false;
  }
}
