// let myLinkedList = {
//     head: {
//         value : 10,
//         next : {
//             value : 5,
//             next: {
//                 value: 16,
//                 next : null
//             }
//         }
//     }
// }


class LinkList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head
        this.length = 1
    }

    printList(){
        let array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array;
    }
    
    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }
    insert(index,value){
        if(index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traversal(index-1);
        const holdingPionter = leader.next;
        leader.next = newNode;
        newNode.next = holdingPionter;
        this.length++;
        return this.printList();
    }
    remove(index){
        const leader = this.traversal(index-1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this.printList();
    }

    traversal(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2,88)
myLinkedList.remove(3)
console.log(myLinkedList.printList());
