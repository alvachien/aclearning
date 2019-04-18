

export class LinkedListItem<T> {
    private _element: T;
    private _next: LinkedListItem<T>;

    constructor() {
        this._next = null;
    }

    get Element(): T {
        return this._element;
    }
    set Element(elm: T) {
        this._element = elm;
    }
    get Next(): LinkedListItem<T> {
        return this._next;
    }
    set Next(nxt: LinkedListItem<T>) {
        this._next = nxt;
    }
}

export class LinkedList<T> {
    constructor() {
        this._head = null;
        this._length = 0;
    }

    private _head: LinkedListItem<T>;
    get Head(): LinkedListItem<T> {
        return this._head;
    }
    set Head(hd: LinkedListItem<T>) {
        this._head = hd;
    }
    private _length: number;
    get Length(): number {
        return this._length;
    }    

    public Append(elem: T) {
        let llit = new LinkedListItem<T>();
        llit.Element = elem;

        if (this._head === null) {
            this.Head = llit;
        } else {
            let curr: LinkedListItem<T> = this._head;
            while(curr.Next) {
                curr = curr.Next;
            }

            curr.Next = llit;
        }

        this._length ++;
    }

    public Insert(pos: number, elem: T) {
        if (pos > 0 && pos < this._length) {
            let newelem = new LinkedListItem<T>();
            newelem.Element = elem;
            let curr: LinkedListItem<T> = this._head;
            let prv: LinkedListItem<T> = null;
            let index: number = 0;

            if (pos === 0) {
                newelem.Next = curr;
                this._head = newelem;
            } else {
                while(index++ < pos) {
                    prv = curr;
                    curr = curr.Next;
                }

                newelem.Next = curr;
                prv.Next = newelem;
            }

            this._length ++;
            return true;
        }

        return false;
    }

    public remove(elem: T) {
        let index = this.indexOf(elem);
        if (index === -1)
            return;

        this.removeAt(index);
    }

    public indexOf(elem: T) : number {
        let curr: LinkedListItem<T> = this._head;
        let index = -1;

        while(curr !== null) {
            if (elem === curr.Element) {
                return index;
            }

            index++;
            curr = curr.Next;
        }

        return index;
    }

    public removeAt(pos: number): T {
        if (pos > -1 && pos < this._length) {
            let curr: LinkedListItem<T> = this._head;
            let prv:LinkedListItem<T> = null;
            let index: number = 0;

            if (pos === 0) {
                this._head = curr.Next;
            } else {
                while(index++ < pos) {
                    prv = curr;
                    curr = curr.Next;
                }

                prv.Next = curr.Next;
            }

            this._length --;

            return curr.Element;
        } 
        

        return null;
    }

    public isEmpty() : boolean {
        return this._length === 0;
    }

    public size(): number {
        return this._length;
    }

    public toString() : string {
        let curr: LinkedListItem<T> = this._head;
        let str: string = "";

        while(curr !== null) {
            str = "," + curr.Element;
            curr = curr.Next;
        }
        return str.slice(1);
    }
}
