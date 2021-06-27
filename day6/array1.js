var names = ['rj', 'risky', 'alex'];
console.log(names);

var len = names.length;
console.log(len);

var arr = new Array(3);

arr = [3, 5, 7];

var arr1 = new Array(2, 5, 7);

console.log('arr: ', arr);
console.log('arr 1: ', arr1);

arr = ['a', 'e', 'i', 'o'];
console.log(arr);

arr.push('u');
console.log('push:' + arr)

arr.pop();
console.log('pop:' + arr)

arr.unshift('l');
console.log('unshift:' + arr);

arr.shift();
console.log('shift:' + arr);

arr.reverse();
console.log('reverse:' + arr);

arr.sort();
console.log('sort:' + arr);
