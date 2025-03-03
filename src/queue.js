const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor (){
    this.queue = new ListNode(null);
    this.front = this.queue;
    this.tale = this.queue.next;

  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value ) {
    if (this.queue.value === null) {
      this.queue.value = value;
    } else if(this.front.next === null){
      const list = new ListNode(value);
      this.front.next = list;
      this.tail = list;
    }else {
      const list = new ListNode(value);
      this.tail.next = list;
      this.tail = list;
    }
  }

  dequeue() {
   let result = this.queue.value;
   this.queue = this.queue.next;
   return result;
  }
}


module.exports = {
  Queue
};
