//call this function
function isValidWalk(walk) {
  if( walk.length != 10 ){ return false };
  if( arrLen(walk, 'n') !== arrLen(walk, 's') ) { return false };
  if( arrLen(walk, 'e') !== arrLen(walk, 'w') ) { return false };
  
  return true;
}

function arrLen(arr, string) {
  return arr.sort().slice(arr.indexOf(string), arr.lastIndexOf(string)+1).length;
}
