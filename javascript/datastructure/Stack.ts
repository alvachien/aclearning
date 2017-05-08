
export class Stack {
    public constructor() {

    } 
    
    // Fields
    private _items: any[] = [];

    // Methods
    public push(elements: any | any[]) {
        this._items.push(elements);
    }
    public pop(): any {
        return this._items.pop();
    }
    public peek(): any {
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
