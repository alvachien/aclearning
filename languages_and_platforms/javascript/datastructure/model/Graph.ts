
import { Dictionary } from './Dictionary';
import { Queue } from './Queue';

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

    private initialColor() {
        let color = [];
        for(let i = 0; i < this._vertices.length; i++) {
            color[this._vertices[i]] = 'white';
        }

        return color;
    }

    public bfs(v, callback) {
        let color = this.initialColor();
        let queue = new Queue<any>();

        queue.enqueue(v);

        while(!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = this._adjList.get(u);

            color[u] = 'grey';
            for(let i = 0; i < neighbors.length; i ++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';

            if (callback) {
                callback(u);
            }
        }
    }

    public bfs2(v) {
        let color = this.initialColor();
        let queue = new Queue<any>();
        let d = [];
        let pred = [];
        queue.enqueue(v);

        for(let i = 0; i < this._vertices.length; i++) {
            d[this._vertices[i]] = 0;
            pred[this._vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = this._adjList.get(u);
            color[u] = 'grey';
            for(let i = 0; i < neighbors.length; i ++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }

        return {
            distance: d,
            predecessors: pred
        };
    }
}
