import QueueConstructor from "./Queues";

class nodeConstructor{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class binaryTreeConstructor{
    constructor(){
        this.root=null;
    }

    insert = function(data){
        let newNode = new nodeConstructor(data);


        if(this.root==null){
            return this.root=newNode;
        } else {
            function insertNewNode(nodeToInsert, referenceHeadNode){
                if(nodeToInsert.data < referenceHeadNode.data){

                    if(referenceHeadNode.left == null){
                        referenceHeadNode.left=nodeToInsert;
                        console.log('inserted to left - ' + nodeToInsert.data)
                        return;
                    } else if(referenceHeadNode.left != null){
                        return insertNewNode(nodeToInsert, referenceHeadNode.left);
                    }
                
                } else if(nodeToInsert.data > referenceHeadNode.data){

                    if(referenceHeadNode.right == null){
                        console.log('inserted to right - ' + nodeToInsert.data)
                        referenceHeadNode.right=nodeToInsert;
                        return;
                    } else if(referenceHeadNode.right != null){
                        return insertNewNode(nodeToInsert, referenceHeadNode.right);
                    }
                }

                }

            insertNewNode(newNode,this.root);
            }
        }

        levelTraversal = function(){
            let queue = new QueueConstructor();
            let traversedData = '';
            function traverseByLevel(referenceHead){
                if(referenceHead==null){
                    return traversedData;
                }


                traversedData+=` ${referenceHead.data}`;
                queue.dequeue();
                if(referenceHead.left){
                    queue.enqueue(referenceHead.left);
                }
                if(referenceHead.right){
                    queue.enqueue(referenceHead.right);
                }
                if(queue.isEmpty()){
                    return traversedData;
                }
                console.log(queue.dequeue())
                return traverseByLevel(queue.dequeue());
            }
            return traverseByLevel(this.root);
        }

    }


export default binaryTreeConstructor;