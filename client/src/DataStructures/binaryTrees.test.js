import binaryTreeConstructor from "./binaryTrees";

describe('constructs a binary search tree',function(){
    it('only 1 element inserted(to root)',function(){
        let binaryTree = new binaryTreeConstructor();
        binaryTree.insert(5);
        expect(binaryTree.root.data).toBe(5);
    })
    // other tests were made in the DOM - a tree was constructed, elemenets inserted and the tree console logged
    // to check the left and right nodes
})

describe('breadth-first(level) traversal of a binary search tree',function(){
    it('empty tree',function(){
        let binaryTree = new binaryTreeConstructor();
        const data = binaryTree.levelTraversal();
        expect(data).toBe('');
    })
    it('main test with equal children on all nodes',function(){
        let binaryTree = new binaryTreeConstructor();

        binaryTree.insert(20);
        binaryTree.insert(10);
        binaryTree.insert(30);
        binaryTree.insert(5);
        binaryTree.insert(15);
        binaryTree.insert(25);
        binaryTree.insert(35);

        const traversedData = binaryTree.levelTraversal();
        expect(traversedData).toBe('20 10 30 5 15 25 35')
    })
})