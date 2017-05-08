
export class Queue<T> {
    public constructor() {
    }

    // Member
    private _items: any[] = [];

    // Methods
    public enqueue(elements: any | any[]) {
        this._items.push(elements);
    }
    public dequeue(): any {
        return this._items.shift();
    }
    public front(): any {
        if (this._items.length > 0)
            return this._items[0];
        
        return null;
    }
    public isEmpty(): boolean {
        return this._items.length == 0;
    }
    public size(): number {
        return this._items.length;
    }

    public print() {
        console.log(this._items.toString());
    }
}

export class QueueElement<T> {
    private _item: T;
    private _priority: number;

    get Item(): T {
        return this._item;
    }
    set Item(val: T) {
        this._item = val;
    }

    get Priority() : number {
        return this._priority;
    }
    set Priority(pri: number) {
        this._priority = pri;
    }

    public constructor(item: T, priority: number) {
        this._item = item;
        this._priority = priority;
    }
}

export class PriorityQueue extends Queue {
    public QueueElement(element: any, priority: any) {

    }
}