
import { Dictionary } from './Dictionary';

export class Graph<T> {
    private _vertices: any[] = [];
    private _adjList = new Dictionary();

    public addVertext(v) {
        this._vertices.push(v);
        this._adjList.set(v, []);
    }

    public addEdge(v, w) {
        this._adjList.get(v).push(w);
        this._adjList.get(w).push(v);
    }
}
