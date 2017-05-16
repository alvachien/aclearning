
import { ValuePair } from './ValuePair';
import { LinkedList } from './LinkedList';

export class HashTable<T> {
    private _table : T[] = [];

    public loseloseHashCode(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i ++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }

    public djb2HashCode(key: string): number {
        let hash: number = 5381;
        for(let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }

        return hash % 1013;
    }

    public put(key: string, value: T) {
        let position = this.loseloseHashCode(key);

        if (this._table[position] === undefined) {
            //this._table[position] = new LinkedList<T>();
        }
        
        this._table[position] = value;
    }

    public get(key: string): T {
        return this._table[this.loseloseHashCode(key)];
    }

    public remove(key: string) {
        this._table[this.loseloseHashCode(key)] = undefined;
    }
}
