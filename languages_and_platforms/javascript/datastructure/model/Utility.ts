import { Stack } from './Stack';
import { Queue } from './Queue';

export class Utility {
  static baseConverter(value: number, base: number) : string {
    let remStack = new Stack<number>();
    let rem: number;
    let baseString = '';
    let digits = '0123456789ABCDEF';

    while (value > 0) {
        rem = Math.floor(value % base);
        remStack.push(rem);
        value = Math.floor(value / base);
    }

    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
  }

  static hotPotato(nameList: any[], num: number): string {
    let queue = new Queue<string>();
    let rstString = "";

    for(let i = 0; i < nameList.length; i ++) {
      queue.enqueue(nameList[i]);
    }

    let eliminated: string = '';
    while(queue.size() > 1) {
      for(let i = 0; i < num; i ++) {
        queue.enqueue(queue.dequeue());
      }

      eliminated = queue.dequeue();
      rstString += "Eliminated: " + eliminated + `;
      `;
    }

    rstString += "Winner is: " + queue.dequeue() + `
      `;
      
    return rstString;
  }
}
