//simple app

//return the sum of 2 numbers
function sum(a, b) {
  return a + b;
}


//return the product of 2 numbers
function product(a, b) {
  return a * b;
}

//return the "difference" of 2 numbers
function difference(a, b) {
  if (a < b) {
  return b - a;
  }
  else {
  return a - b;
  }
}


//export functions
module.exports = {
    sum,
    product,
    difference //"minus"
}
