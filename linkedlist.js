'use strict';

function LinkedList() {
  this.start = null;
  this.end = null;
  this.length = 0;
}

LinkedList.prototype.makeNode = function() {
  return { value: null, next: null };
};

LinkedList.prototype.add = function(value) {
  if(this.start === null) {
    this.start = this.makeNode();
    this.end = this.start;
  }
  else {
    this.end.next = this.makeNode();
    this.end = this.end.next;
  }
  this.length += 1;
  this.end.value = value;
};

LinkedList.prototype.poll = function() {
  if(this.length === 0) throw new Error("No data in LinkedList");
  else {
    var cache = this.start.value;
    this.start = this.start.next;
    this.length -= 1;
    return cache;
  }
};

LinkedList.prototype.size = function() {
  return this.length;
};

module.exports = LinkedList;
