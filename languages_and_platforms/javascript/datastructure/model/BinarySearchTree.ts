

export class BinarySearchTreeNode<T> {
    private _key: T;
    private _left: BinarySearchTreeNode<T> = null;
    private _right: BinarySearchTreeNode<T> = null;

    constructor() {
    }

    get Key(): T {
        return this._key;
    }
    set Key(ky: T) {
        this._key = ky;
    }

    get Left(): BinarySearchTreeNode<T> {
        return this._left;
    }
    set Left(lft: BinarySearchTreeNode<T>) {
        this._left = lft;
    }

    get Right(): BinarySearchTreeNode<T> {
        return this._right;
    }
    set Right(rgt: BinarySearchTreeNode<T>) {
        this._right = rgt;
    }
}

export interface BinarySearchTreeCallback<T> {
    (key: T): void;
}

export class BinarySearchTree<T> {

    constructor() {
    }

    private _root: BinarySearchTreeNode<T> = null;

    get Root(): BinarySearchTreeNode<T> {
        return this._root;
    }
    set Root(rt: BinarySearchTreeNode<T>) {
        this._root = rt;
    }

    public insert(key: T) {
        let newNode: BinarySearchTreeNode<T> = new BinarySearchTreeNode<T>();
        newNode.Key = key;

        if (this._root === null) {
            this._root = newNode;
        } else {
            this.insertNode(this._root, newNode);
        }
    }

    public insertNode(parent: BinarySearchTreeNode<T>, newNode: BinarySearchTreeNode<T>) {
        if (newNode.Key < parent.Key) {
            if (parent.Left === null) {
                parent.Left = newNode;
            } else {
                this.insertNode(parent.Left, newNode);
            }            
        } else {
            if (parent.Right === null) {
                parent.Right = newNode;
            } else {
                this.insertNode(parent.Right, newNode);
            }
        }
    }

    public inOrderTraverse(callback: BinarySearchTreeCallback<T>) {
        this.inOrderTraverseImpl(this._root, callback);
    }

    private inOrderTraverseImpl(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>) {
        if (node !== null) {
            this.inOrderTraverseImpl(node.Left, callback);
            callback(node.Key);
            this.inOrderTraverseImpl(node.Right, callback);
        }
    }

    public preOrderTraverse(callback: BinarySearchTreeCallback<T>) {
        this.preOrderTraverseImpl(this._root, callback);
    }

    private preOrderTraverseImpl(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>) {
        if (node !== null) {
            callback(node.Key);
            this.preOrderTraverseImpl(node.Left, callback);
            this.preOrderTraverseImpl(node.Right, callback);
        }
    }

    public postOrderTraverse(callback: BinarySearchTreeCallback<T>) {
        this.postOrderTraverseImpl(this._root, callback);
    }

    private postOrderTraverseImpl(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>) {
        if (node !== null) {
            this.postOrderTraverseImpl(node.Left, callback);
            this.postOrderTraverseImpl(node.Right, callback);
            callback(node.Key);
        }
    }

    private minMode(node: BinarySearchTreeNode<T>) {
        if (node !== null) {
            while(node && node.Left !== null) {
                node = node.Left;
            }

            return node.Key;
        }

        return null;
    }

    public min() {
        return this.minMode(this._root);
    }

    private maxNode(node: BinarySearchTreeNode<T>) {
        if (node !== null) {
            while(node && node.Right !== null) {
                node = node.Right;
            }

            return node.Key;
        }

        return null;
    }

    public max() {
        return this.maxNode(this._root);
    }

    private searchNode(node: BinarySearchTreeNode<T>, key: T): boolean {
        if (node === null) {
            return false;
        }

        if (key < node.Key) {
            return this.searchNode(node.Left, key);
        } else if (key > node.Key) {
            return this.searchNode(node.Right, key);
        } else {
            return true;
        }
    }

    public search(key: T) : boolean {
        return this.searchNode(this._root, key);
    }

    private removeNode(node: BinarySearchTreeNode<T>, key: T) {
        if (node === null) {
            return null;
        }

        if (key < node.Key) {
            node.Left = this.removeNode(node.Left, key);
            return node;
        } else if (key > node.Key) {
            node.Right = this.removeNode(node.Right, key);
            return node;
        } else {
            if (node.Left === null && node.Right === null) {
                node = null;
                return node;
            }

            if (node.Left === null ) {
                node = node.Right;
                return node;
            } else if (node.Right === null) {
                node = node.Left;
                return node;
            }

            let aux = this.findMinNode(node.Right);
            node.Key = aux.Key;
            node.Right = this.removeNode(node.Right, aux.Key);
            return node;
        }
    }

    private findMinNode(node: BinarySearchTreeNode<T>) {
        if (node !== null) {
            while(node && node.Left !== null) {
                node = node.Left;
            }

            return node;
        }

        return null;        
    }
}
