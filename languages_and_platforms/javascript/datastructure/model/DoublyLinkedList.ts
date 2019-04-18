
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

    public insert(pos: number, element: T): boolean {
        if (pos >= 0 && pos <= this._length) {
            let node = new DoublyLinkedListItem<T>();
            node.Element = element;

            let curr: DoublyLinkedListItem<T> = this._head;
            let previous: DoublyLinkedListItem<T> = null;
            let index: number = 0;

            if (pos === 0) {
                if (this._head !== null) {
                    node.Next = this._head;
                    curr.Previous = node;
                    this._head = node;
                } else {
                    this._head = node;
                    this._tail = node;
                }
            } else if(pos === this._length) {
                curr = this._tail;
                curr.Next = node;
                node.Previous = curr;
                this._tail = node;
            } else {
                while(index++ < pos) {
                    previous = curr;
                    curr = curr.Next;
                }

                node.Next = curr;
                previous.Next = node;

                curr.Previous = node;
                node.Previous = previous;
            }

            this._length ++;
            return true;
        }

        return false;
    }

    public removeAt(pos: number): T {
        if (pos >= 0 && pos < this._length) {
            let curr: DoublyLinkedListItem<T> = this._head;
            let previous: DoublyLinkedListItem<T> = null;
            let index: number = 0;

            if (pos === 0) {
                this._head = curr.Next;

                if (this._length === 1) {
                    this._tail = null;
                } else {
                    this._head.Previous = null;
                }
            } else if (pos === this._length - 1) {
                curr = this._tail;
                this._tail = curr.Previous;
                this._tail.Next = null;
            } else {
                while(index++ < pos) {
                    previous = curr;
                    curr = curr.Next;
                }

                previous.Next = curr.Next;
                curr.Next.Previous = previous;
            }

            this._length --;
            return curr.Element;
        }

        return null; 
    }
}