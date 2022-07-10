function queueTime(customers, n) {  
  var tills = new Array(n).fill(0);
  var tillPosition = 0;
  
  customers.forEach(customerTime => {
    tills[0] += customerTime;
    tills.sort((a,b) => a-b);
  });
  
  return tills.sort((a,b) => a-b).pop();
}
