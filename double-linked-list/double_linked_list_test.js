const List = require('./double_linked_list');

const list = new List();

list.add(1);
list.add(2);
list.add({a: 33, b: [1,2,3,4,5,6,7,8]});
list.add(4);
list.add(2);

console.log('contains(3): ' + list.contains(3));

console.log('contains(2): ' + list.contains(2));

console.log('indexOf(2): ' + list.indexOf(2));

console.log('lastIndexOf(2): ' + list.lastIndexOf(2));

console.log('get(2): ' + list.get(2));

console.log('size: ' + list.size);

list.add(5);

list.add(6);

console.log('size: ' + list.size);

list.printForward();

list.removeByIndex(2);

// Removes first by value.
list.removeByValue(5, true);

// Removes all by value.
list.removeByValue(2);

console.log('size: ' + list.size);

list.printForward();

list.printBackward();

const arr = list.toArray();

list.add(100);
list.add('String test');

console.log(arr.length);
console.log(arr);

list.printForward();

list.clear();

console.log('cleared');

list.printForward();

let index3 = list.get(3);
console.log(index3);
