
export class Queue<T> {
    constructor() {
    }

    // Member
    protected _items: T[] = [];

    // Methods
    public enqueue(elements: T) {
        this._items.push(elements);
    }
    public dequeue(): T {
        return this._items.shift();
    }
    public front(): T {
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

export class PriorityQueue<T> extends Queue<QueueElement<T>> {
    public enqueue(element: QueueElement<T>) {
        if (this.isEmpty()) {
            this._items.push(element);
        }

        let added = false;
        for (let i = 0; i < this._items.length; i ++) {
            if (element.Priority < this._items[i].Priority) {
                this._items.splice(i, 0, element);
                added = true;
                break;
            }
        }

        if (!added) {
            this._items.push(element);
        }        
    }    
}
