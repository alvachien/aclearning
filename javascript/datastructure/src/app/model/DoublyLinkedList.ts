
export class DoublyLinkedListItem<T> {
    private _element: T;
    private _next: DoublyLinkedListItem<T>;
    private _previous: DoublyLinkedListItem<T>;

    constructor() {
        this._next = null;
        this._previous = null;
    }

    get Element(): T {
        return this._element;
    }
    set Element(elm: T) {
        this._element = elm;
    }
    get Next(): DoublyLinkedListItem<T> {
        return this._next;
    }
    set Next(nxt: DoublyLinkedListItem<T>) {
        this._next = nxt;
    }
    get Previous(): DoublyLinkedListItem<T> {
        return this._previous;
    }
    set Previous(prv: DoublyLinkedListItem<T>) {
        this._previous = prv;
    }
}

export class DoublyLinkedList<T> {
    private _length: number = 0;
    private _head: DoublyLinkedListItem<T>;
    private _tail: DoublyLinkedListItem<T>;

    public Length(): number {
        return this._length;
    }

    public Head(): DoublyLinkedListItem<T> {
        return this._head;
    }

    public Tail(): DoublyLinkedListItem<T> {
        return this._tail;
    }
}