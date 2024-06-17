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

function buildTree(arr) {
    const tree = new Tree();
    const sortedArr = mergeSort(arr);
    const midPoint = Math.floor(arr.length / 2);
    var currentNode;

    tree.root = arr[midPoint];

    for (let i = midPoint; i < arr.length; i++) {
         
    }

    console.log(arr);
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
        
        return mergedArr.concat(sortedLeft, sortedRight); // Concat remaining value

    }
}

function removeDuplicates(arr) {
    arr.forEach(element, index => {
        if (element === arr[index + 1]) {
            delete element;
        }
    });
}

const myArr = [1, 7, 3, 4, 12, 2, 18, 3, 24, 12, 37, 42];
const lilArr = [2, 1];
console.log(mergeSort(myArr));