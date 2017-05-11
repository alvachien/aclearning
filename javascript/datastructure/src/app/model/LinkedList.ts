

export class LinkedListItem<T> {
    private _element: T;
    private _next: LinkedListItem<T>;

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
    }

    private _head: LinkedListItem<T>;
    get Head(): LinkedListItem<T> {
        return this._head;
    }
    set Head(hd: LinkedListItem<T>) {
        this._head = hd;
    }

    public Append(elem: LinkedListItem<T>) {
        
    }
}
