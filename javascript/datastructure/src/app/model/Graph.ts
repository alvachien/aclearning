
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

    public toString(): string {
        let s:string = '';
        for(let i = 0; i < this._vertices.length; i ++) {
            s += this._vertices[i] + ' -> ';

            let neighbors = this._adjList.get(this._vertices[i]);
            for(let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }

            s += '\n';
        }

        return s;
    }
}
