'use strict';
var LinkedList = require("./linkedlist");

var list = new LinkedList();
for(var i = 1; i <= 10; i++) {
  list.add(i);
}
console.log("\n" + list.size() + "\n");
for(var i = 1; i <= 4; i++) {
  console.log(list.poll());
}
console.log("\n" + list.size() + "\n");
