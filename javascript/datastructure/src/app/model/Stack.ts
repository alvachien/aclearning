
export class Stack<T> {
    constructor() {
    } 
    
    // Fields
    private _items: T[] = [];

    // Methods
    public push(...elements: T[]): number {
        return this._items.push(elements);
    }
    public pop(): T {
        return this._items.pop();
    }
    public peek(): T {
        if (this._items.length > 0)
            return this._items[this._items.length - 1];
        return null;
    }
    public isEmpty(): boolean {
        return this._items.length == 0;
    }
    public clear() {
        this._items = [];
    }
    public size(): number {
        return this._items.length;
    }

    public print() {
        console.log(this._items.toString());
    }
}
