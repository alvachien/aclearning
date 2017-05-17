
import { Dictionary } from './Dictionary';

export class Graph<T> {
    private _vertices: any[] = [];
    private _adjList = new Dictionary<T>();

    public addVertext(v) {
        this._vertices.push(v);
        this._adjList.set(v, []);
    }
}
