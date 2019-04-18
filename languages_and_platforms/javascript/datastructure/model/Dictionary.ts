
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

export class Dictionary {
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

    public get(key) {
        return this.has(key)? this._items[key]: undefined;
    }

    public values() {
        let values = [];
        for(let k in this._items) {
            if (this.has(k)) {
                values.push(k);
            }
        }

        return values;
    }

    public getItems() {
        return this._items;
    }

    public clear(): void {
        this._items = {};
    }

    public size(): number {
        return Object.keys(this._items).length;
    }

    public sizeLegacy() : number {
        let count: number = 0;
        for (var prop in this._items) {
            if (this._items.hasOwnProperty(prop)) {
                ++count;
            }            
        }

        return count;
    }    
}
