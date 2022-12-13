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

    pushAll(items: T[]) : void {
      const reversedArray = items.reverse() 
      for(let i = 0 ; i < reversedArray.length ; i++) {
        this.push(reversedArray[i])
      }
    }
  
    pop(): T {
      const item = this.storage.pop();
      if(item === undefined) {
        throw Error('the stack is empty, can not pop!');
      }
      return item
    }

    popAll(amount: number): T[] {

      const items : T[] = [];

      for(let i = 0 ; i < amount ; i++) {
        items.push(this.pop())
      }

      return items;
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