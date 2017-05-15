
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

export class Dictionary<T> {
    private _items = {};

    public has(key: any) {
        return key in this._items;
    }

    public set(key: any, value: any) {
        this._items[key] = value;
    }

    public remove(key: any): boolean {
        if (this.has(key)) {
            delete this._items[key];
            return true;
        }

        return false;
    }
}
