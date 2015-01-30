/* Nathan Samano
 * Ch. 4 Range
 * Put a range of numbers in an array and add them all up
 * CMP237
 * 2/2/15
 */

function range(start, end, step) {
 if (step == 0) return null;
 else if (start == end) return end;
 var array = [0,0,0,0];
 var j = 0;
  if (step == undefined) step = 1;
  if (start < end) {
  
    for (var i = start; i < end+1; i+=step) {
     array[j] = i;
     j++;
    }
  } else {
    for (var i = start; i > end-1; i+=step) {
      array[j] = i;
      j++;
    }
  }
  return array;
}

function sum(arg) {
  var answer = 0;
  for (var i = 0; i < arg.length; i++) {
     answer += arg[i];
  }
  return answer;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(3, 3, -3));
// → 3
