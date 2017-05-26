
export class SequenceList<T> {
    private _data: T[] = [];

    get Data(): T[] {
        return this._data;
    }
    set Data(data: T[]) {
        this._data = data;
    }

    constructor() {
        this.InitList();
    }

    public InitList() {
        this._data = [];
    }

    public Length(): number {
        return this._data.length;
    }

    public GetElement(index: number) : T {
        if (index < 0 || index > this.Length()) {
            return null;
        }

        return this._data[index];
    }

    public LocateElement(val: T) : number {
        for(let i = 0; i < this.Length(); i++) {
            if (this._data[i] === val) {
                return i;
            }
        }

        return -1;
    }

    public InsertElement(index: number, val: T): boolean {
        if (index < 0 || index > this._data.length + 1) {
            return false;
        }

    }

    public AppendElement(val: T) : number  {
        return this._data.push(val);
    }
}
