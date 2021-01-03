class Stack {
  constructor() {
    (this.top = null), (this.bottom = null);
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }
  pop() {
      if(this.length === 0){
          return null
      }
      if(this.top == this.bottom){
          this.bottom = null
      }
      this.top = this.top.next;
      this.length--;
      return this;

  }
}

const myStack = new Stack();
// console.log(myStack.peek());
myStack.push("google");
myStack.push("udmey");
myStack.push("facebook");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
