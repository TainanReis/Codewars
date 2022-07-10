function dirReduc(arr){
  let arrString = arr.join(" ");
  let regex = /NORTH SOUTH|SOUTH NORTH|EAST WEST|WEST EAST/g;
  
  while(arrString.search(regex)+1){
    arrString = arrString.replace(regex, "").replace(/  */g, " ");
  }
  
  return arrString.trim().split(" ").filter(e => e.length > 1);
}
