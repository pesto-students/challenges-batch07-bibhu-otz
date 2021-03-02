import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new LinkListNode(value, this.head);
    this.head = newNode;
    // if no tail has been specified then the head and tail should be the same
    if (!this.tail) this.tail = newNode;
    return this;
  }

  append(value) {
    this.size += 1;
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  delete(value) {
    const deleteOne = false;
    if (!this.head) return false;
    let deletedNode = null;
    // If the head needs to be deleted
    while (this.head && this.head.value === value) {
      this.size -= 1;
      deletedNode = this.head;
      this.head = this.head.next;
      if (deleteOne) return true;
    }
    let currentNode = this.head;
    // If any node except the head or tail needs to be deleted
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          this.size -= 1;
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          if (deleteOne) return true;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // If the tail needs to be deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    if (deletedNode === null) return false;
    return true;
  }

  traverse() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node !== null) {
      // eslint-disable-next-line no-console
      console.log(node.data);
      node = node.next;
    }
  }

  contains(value) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.value === value) {
        return true;
      }
      thisNode = thisNode.next;
    }
    return false;
  }

  length() {
    let count = 0;
    if (!this.head) {
      return count;
    }
    let node = this.head;
    while (node !== null) {
      count += 1;
      node = node.next;
    }
    return count;
  }
}
