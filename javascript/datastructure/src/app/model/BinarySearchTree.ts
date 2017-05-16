

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
}