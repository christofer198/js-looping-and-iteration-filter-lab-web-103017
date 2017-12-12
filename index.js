// Code your solution in this file
function findMatching(drivers, name){
  const newArray = [];
  for(i = 0; i < drivers.length; i++){
    if(drivers[i].toUpperCase() == name.toUpperCase()){
      newArray.push(drivers[i]);
    }
  }
  return newArray;
}

function fuzzyMatch(drivers, name){
  const newArray = [];
  for(i = 0; i < drivers.length; i++){
    if(name == drivers[i].slice(0, name.length)){
      newArray.push(drivers[i])
    }
  }
  return newArray
}
