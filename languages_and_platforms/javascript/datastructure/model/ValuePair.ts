
export class ValuePair {
    private _key: any;
    private _value: any;

    public toString() : string {
        return '[' + this._key + ' - ' + this._value + ']';
    }
}
