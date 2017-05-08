import { Stack } from './Stack';

export class Utility {
  static baseConverter(value: number, base: number) : string {
    let remStack = new Stack();
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

}