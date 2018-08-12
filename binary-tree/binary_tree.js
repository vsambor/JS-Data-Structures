class BinaryTree {
    constructor() {
        this.root = null;
        this.left = null;
        this.right = null;
        this.size = 0;
    }

    add(id, data) {
        const node = new Node(id, data);

        if(!this.root) {
            this.root = node;
            this.size++;
        } else {
            let temp = Object.assign({}, this.root);

            while(temp) {
                // Go left.
                if(node.id < this.temp.id) {

                }

                // Go right.
                else if (node.id > this.temp.id) {

                }

                // Else I don't remember.
                // TODO - Should check what to do when there are duplicate keys.
            }
        }
    }


}

/**
 *
 */
class Node {
    constructor(id=-1, data=null, left=null, right=null) {
        this.id = id;
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

module.exports = BinaryTree;