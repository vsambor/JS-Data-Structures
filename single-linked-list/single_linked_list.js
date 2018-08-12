/**
 * Simple Linked List data structure.
 *
 * @date - 08.2018
 * @auhtor - vasile sambor
 * @license - MIT
 */
class List {
    /**
     * initializes the list when <new List()> is called.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Checks if the list is empty.
     *
     * @returns {boolean} - true if is empty, false otherwise.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Appends the specified data to the end of this list.
     *
     * @param data - the data to be appended to this list.
     */
    add(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    /**
     * Converts the list to array.
     *
     * @returns {Array} - the converted array.
     */
    toArray() {
        let array = [];
        let node = Object.assign({}, this.head);

        while (node) {
            array.push(node.data);
            node = node.next;
        }

        return array;
    }

    /**
     * Removes all the elements from the list.
     */
    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }

    /**
     * Checks if list contains provided data.
     *
     * @param data - data to be checked.
     *
     * @return {boolean} - true if contains, false if does not contain or the list is empty.
     */
    contains(data) {
        if (this.isEmpty()) {
            console.info("List is empty!");
            return false;
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

    /**
     * Gets element by index.
     *
     * @param index - position in the list.
     *
     * @return {*} - Node data if the index is found, null otherwise.
     */
    get(index) {
        if (this.isEmpty()) {
            console.info("List is empty!");
            return null;
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

    /**
     * Returns the first index of provided data.
     *
     * @param data - data to check the index.
     *
     * @return {number} - the position in the list; -1 if is not found or the list is empty.
     */
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

    /**
     * Returns the last index of provided data in the list.
     *
     * @param data - data to check the
     *
     * @return {number} -  the last position in the list; -1 if is not found or the list is empty.
     */
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

    /**
     * Removes an element from the list by index.
     * Note: Throws error if the list is empty.
     *
     * @param index - the index to be removed.
     *
     * @return {boolean} - true if the element has been successfully removed, false otherwise.
     */
    removeByIndex(index) {
        if (this.isEmpty()) {
            throw new Error("List is empty!");
        }

        let node = Object.assign({}, this.head);
        let currIndex = 0;
        let prev = null;

        while (node) {
            if (currIndex === index) {
                // Is Head.
                if (!prev) {
                    this.head = this.head.next;
                }

                // Is Tail.
                else if (!node.next) {
                    this.tail = prev;
                    this.tail.next = null;
                }

                // Somewhere in the chain.
                else {
                    prev.next = node.next;
                }

                node = null;
                this.size--;
                return true;
            }

            currIndex++;
            prev = node;
            node = node.next;
        }
        return false;
    }

    /**
     * Removes an element from the list by found data.
     * Note: Throws error if the list is empty.
     *
     * @param data - the index to be removed.
     * @param first - flag indicates if needs to remove just first found, or all same data; all by default.
     *
     * @return {boolean} - true if the element/s has been successfully removed, false otherwise.
     */
    removeByValue(data, first) {
        if (this.isEmpty()) {
            throw new Error("List is empty!");
        }

        let node = Object.assign({}, this.head);
        let prev = null;

        while (node) {
            if (data === node.data) {
                // Is Head.
                if (!prev) {
                    this.head = this.head.next;
                }

                // Is Tail.
                else if (!node.next) {
                    this.tail = prev;
                    this.tail.next = null;
                }

                // Some node in the chain.
                else {
                    prev.next = node.next;
                }

                this.size--;

                if (first) {
                    return true;
                }
            }

            node = node.next;
        }
        return false;
    }

    /**
     * Prints the list in head to tail direction.
     */
    print() {
        if (this.isEmpty()) {
            console.info("List is empty!");
            return;
        }

        let node = Object.assign({}, this.head);
        let i = 0;
        let result = 'List: \n(';
        let sep = '';
        while (node) {
            result += sep + `\n  [${i}]: ${JSON.stringify(node.data)}`;
            sep = ',';
            i++;
            node = node.next;
        }
        result += '\n)\n';
        console.log(result);
    }
};

/**
 * Represents a link chain component, specific to linked list structure.
 * It holds the data and links to other nodes in the list.
 */
class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

module.exports = List;