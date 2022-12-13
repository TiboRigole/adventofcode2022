import { IStack } from "./IStack";

export class Stack<T> implements IStack<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    push(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Stack has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
  
    pop(): T {
      const item = this.storage.pop();
      if(item === undefined) {
        throw Error('the stack is empty, can not pop!');
      }
      return item
    }
  
    peek(): T {
      const item = this.storage[this.size() - 1];
      if(item === undefined) {
        throw Error('the stack is empty, can not pop!');
      }
      return item;
    }
  
    size(): number {
      return this.storage.length;
    }
}