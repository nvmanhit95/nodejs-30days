arr = ['b', 'e', 'a', 'o', 'p', 'n', 'r'];

arr.splice(2, 2, 'rj', 'nodejs');
console.log(arr);

arr.splice(2, 2);
console.log(arr);

arr1 = ['tomatoes', 'pineapple'];
arr2 = ['mango', 'peach', 'apple'];

console.log(arr1);
console.log(arr2);
var newArray = arr1.concat(arr2);
console.log(newArray);

var pos = newArray.indexOf("pineapple");
console.log("index of pineapple is : " + pos)

arr = [5, 2, 8, 5, 6];
console.log(arr);
var pos = arr.lastIndexOf(5);
console.log("index of 5 is : " + pos);

var str1 = arr1.join();
var str2 = arr2.join(':');
console.log(str1);
console.log(str2);

arr1 = [2, 4, 6, 8, 10];
arr2 = [2, 3, 4, 6, 8];
str1 = arr1.slice(2, 4);
str2 = arr2.slice(-2, -1);
console.log(str1);
console.log(str2);

function even(value) {
  return (value % 2) === 0;
}

var out1 = arr1.every(even);
var out2 = arr2.every(even);

console.log("Output of array 1 : " + out1);
console.log("Output of array 2 :" + out2);

arr1.forEach(function (item) {
  console.log(item);
})

function mul(value, total) {
  total = value * total;
  return total;
}

var output = arr1.reduce(mul);
console.log("The product of the array is : " + output);

