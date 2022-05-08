// find very first repeated element in array
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
