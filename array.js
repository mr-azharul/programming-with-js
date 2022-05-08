<!=== Problem 01 ===!>
// find very first repeated element of an array
// ['a', 'b', 'c', 'b', 'a', 'c'] => 'a'

function findRepeated(arr) {
  let idx = -1;

  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      if(arr[i] == arr[j]) {
        if(i != j) {
          let min = Math.min(i, j);
          if(idx == -1 || min < idx) {
            idx = min;
          }
        }
      }
    }
  }
  
  return idx == -1 ? "" : arr[idx];
}

let arr = ['a', 'b', 'c', 'b', 'a', 'c'];
findRepeated(arr);

<!=== Problem 02 ===!>
// find maximum time occur element of an array
// [1, 2, 3, 3, 2, 3] => 3

function findMaxOccur(arr) {
  let obj ={}, n = "", count = 0;
  
  for(let i=0; i<arr.length; i++) {
    if(obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
    
    if(count < obj[arr[i]]) {
      count = obj[arr[i]];
      n = arr[i];
    }
  }
  
  return n;
}

let arr = [1, 2, 3, 3, 2, 3];
findMaxOccur(arr);
