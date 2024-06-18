class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.left = null;
        this.right = null;
    }
}

function insert(value, root) {
    
    root = recurse(value, root);

    function recurse(value, node) {
        
        if (node === null) {

            return new Node(value);

        } else if (value < node.value) {

            node.left = recurse(value, node.left);

        } else if (value > node.value) {

            node.right = recurse(value, node.right);

        }

        return node;
    }
}

function buildTree(arr) {
    const tree = new Tree();
    const sortedArr = mergeSort(arr);
    const midPoint = Math.floor(sortedArr.length / 2);

    tree.root = new Node(sortedArr[midPoint]);
    tree.root.left = recurse(sortedArr.slice(0, midPoint));
    tree.root.right = recurse(sortedArr.slice(midPoint + 1));

    function recurse(arr) {
        if (arr.length === 0) {

            return null;

        } else {
            var newMid = Math.floor(arr.length / 2);
            var newNode = new Node(arr[newMid]);
  
            newNode.left = recurse(arr.slice(0, newMid));
            newNode.right = recurse(arr.slice(newMid + 1));

            return newNode;
        }
    }

    return tree.root;
}

function mergeSort(arr) { // Removes duplicate values
    var midPoint = Math.floor(arr.length / 2);

    if (arr.length < 2) {

        return arr;

    } else {
        var arrLeft = arr.slice(0, midPoint);
        var arrRight = arr.slice(midPoint);

        var sortedLeft = mergeSort(arrLeft);
        var sortedRight = mergeSort(arrRight);
        var mergedArr = [];

        while (sortedLeft.length > 0 && sortedRight.length > 0) {
    
            if (sortedLeft[0] > sortedRight[0]) {

                if (sortedRight[0] === mergedArr[mergedArr.length - 1]) { // Check for duplicates

                    sortedRight.shift();

                } else {

                    mergedArr.push(sortedRight.shift());

                }

            } else {

                if (sortedLeft[0] === mergedArr[mergedArr.length - 1]) { // Check for duplicates

                    sortedLeft.shift();

                } else {

                    mergedArr.push(sortedLeft.shift());

                }

            }

        }

        if (sortedLeft.includes(mergedArr[mergedArr.length - 1]) || sortedRight.includes(mergedArr[mergedArr.length - 1])) { // Check for duplicates

            mergedArr.pop();

        }

        return mergedArr.concat(sortedLeft, sortedRight); // Concat remaining values

    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const myArr = [1, 7, 3, 4, 12, 2, 18, 3, 24, 12, 37, 42];
var mid = Math.floor(myArr.length / 2);
const lilArr = [2, 1];
var myTree = buildTree(myArr);
console.log(mergeSort(myArr));
prettyPrint(myTree);
insert(45, myTree);
insert(41, myTree);
console.log("myTree", myTree);
prettyPrint(myTree);
