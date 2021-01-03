class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
      if(this.length === 0){
          null
      }
      if(this.first === this.last){
          this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return this;

  }
}


const myQueue = new Queue();
myQueue.enqueue('izhar');
myQueue.enqueue('sheryar');
myQueue.enqueue('ahmed');
myQueue.enqueue('umair');

console.log(myQueue.dequeue());