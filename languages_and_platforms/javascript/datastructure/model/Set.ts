
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

export class MySet {
    private _items: {};

    public has(val: any) {
        return (val in this._items);
    }

    public add(val: any): boolean {
        if (this.has(val)) {
            this._items[val] = val;
            return true;
        }

        return false;
    }

    public remove(val: any): boolean {
        if (this.has(val)) {
            delete this._items[val];
            return true;
        }

        return false;
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

    public values() {
        return Object.keys(this._items);
    }

    public valuesLegacy() {
        let keys = [];
        for(var key in this._items) {
            keys.push(key);
        }

        return keys;
    }

    public union(anotherSet: MySet) {
        let unionSet = new MySet();
        let values = this.values;
        for(let i = 0; i < values.length; i ++) {
            unionSet.add(values[i]);
        }

        values = anotherSet.values;
        for(let i = 0; i < values.length; i ++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    public intersection(anotherSet: MySet) {
        let intersectionSet = new MySet();

        let values = this.values;
        for(let i = 0; i < values.length; i ++) {
            if (anotherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }            
        }

        return intersectionSet;
    }

    public difference(anotherSet: MySet) {
        let differenceSet = new MySet();

        let values = this.values();
        for(let i = 0; i < values.length; i ++) {
            if (!anotherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }            
        }
        
        return differenceSet;
    }

    public subset(anotherSet: MySet): boolean {
        if (this.size() > anotherSet.size()) {
            return false;
        }

        let values = this.values();
        for(let i = 0; i < values.length; i ++) {
            if (!anotherSet.has(values[i])) {
                return false;
            }
        }

        return true;
    }
}
