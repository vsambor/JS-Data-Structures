class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Check if the list is empty.
     *
     * @returns {boolean} - true if is empty, false otherwise.
     */
    isEmpty() {
        return this.head === null && this.tail === null;
    }

    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    clear() {
        this.head = this.tail = null;
    }

    contains(data) {
        if (this.isEmpty()) {
            throw("List is empty!");
        }

        let node = Object.assign({}, this.head);

        while (node) {
            if (node.data === data) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    get(index) {
        if (this.isEmpty()) {
            throw("List is empty!");
        }

        let node = Object.assign({}, this.head);
        let i = 0;
        while (node) {
            if (i === index) {
                return node.data;
            }
            node = node.next;
            i++;
        }
        return null;
    }

    indexOf(data) {
        if (this.isEmpty()) {
            return -1;
        }

        let index = 0;
        let node = Object.assign({}, this.head);
        while (node) {
            if (data === node.data) {
                return index;
            }
            index++;
            node = node.next;
        }
    }

    lastIndexOf(data) {
        if (this.isEmpty()) {
            return -1;
        }

        let index = 0;
        let lastIndex = 0;

        let node = Object.assign({}, this.head);
        while (node) {
            if (data === node.data) {
                lastIndex = index;
            }
            index++;
            node = node.next;
        }

        return lastIndex;
    }

    removeByIndex(index) {
        if (this.isEmpty()) {
            throw("List is empty!");
        }

        let node = Object.assign({}, this.head);
        let currIndex = 0
        while (node) {
            if (currIndex == index) {
                // Is Head.
                if (!node.back) {
                    this.head = this.head.next;
                    this.head.prev = null;
                }

                // Is Tail.
                else if (!node.next) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }

                // Some node in the chain.
                else {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }

                node = null;
                return true;
            }

            currIndex++;
            node = node.next;
        }
        return false;
    }

    removeByValue(data, first) {
        if (this.isEmpty()) {
            throw("List is empty!");
        }

        let node = Object.assign({}, this.head);
        while (node) {
            if (data === node.data) {
                // Is Head.
                if (!node.back) {
                    this.head = this.head.next;
                    this.head.prev = null;
                }

                // Is Tail.
                else if (!node.next) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }

                // Some node in the chain.
                else {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }

                if (first) {
                    return true;
                }
            }

            node = node.next;
        }
        return false;
    }

    printNode(node) {
        if (node) {
            console.log(node.data);
        }
    }

    printForward() {
        if (this.isEmpty()) {
            throw("List is empty!");
        }

        let node = Object.assign({}, this.head);
        while (node) {
            this.printNode(node);
            node = node.next;
        }
    }

    printBackward() {
        if (this.isEmpty()) {
            throw("List is empty!");
        }

        let node = Object.assign({}, this.tail);
        while (node) {
            this.printNode(node);
            node = node.tail;
        }
    }
}


class Node {
    constructor(data = null, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}


function test() {
    const list = new List();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(2);

    console.log('contains(3): ' + list.contains(3));
    console.log('indexOf(2): ' + list.indexOf(2));
    console.log('lastIndexOf(2): ' + list.lastIndexOf(2));
    console.log('get(2): ' + list.get(2));
    console.log('length(): ' + list.length());

    list.add(5);
    list.add(6);

    list.printForward();

    console.log('length(): ' + list.length());

    list.removeByValue(2);

    list.printForward();
}
