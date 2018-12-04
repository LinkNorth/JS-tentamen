function Node(value, next) {
  this.value = value;
  this.next = next;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value, this.head);
  this.head = node;
}

/* Do NOT touch anything above this line */

/* Implement a solution with a loop here */
LinkedList.prototype.loop = function(f) {
  let node = this.head;
  while(node) {
    f(node.value);
    if (node.next) node = node.next;
    else node = null;
  }
}

/* Implement a recursive function solution here */
function loop(node, f) {
  f(node.value);
  if (node.next) loop(node.next, f);
}

/* Do NOT touch anything below this line */

let list = new LinkedList();
list.addToHead(5);
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);

function logFunction(value) {
  console.log(value * 2);
}

loop(list.head, logFunction);

list.loop(logFunction);

