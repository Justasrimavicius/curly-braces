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
                        return;
                    } else if(referenceHeadNode.left != null){
                        return insertNewNode(nodeToInsert, referenceHeadNode.left);
                    }
                
                } else if(nodeToInsert.data > referenceHeadNode.data){

                    if(referenceHeadNode.right == null){
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

            if(this.root==null){
                return traversedData;
            }
            // traversedData+= ` ${this.root.data}`;
            queue.enqueue(this.root);
            return traverseByLevel(queue.dequeue());

            function traverseByLevel(referenceHead){
                if(referenceHead.left){
                    queue.enqueue(referenceHead.left);
                }
                if(referenceHead.right){
                    queue.enqueue(referenceHead.right);
                }
                
                // for semanticity
                if(traversedData==''){
                    traversedData+=`${referenceHead.data}`;
                } else {
                    traversedData+=` ${referenceHead.data}`;
                }

                if(queue.isEmpty()){
                    return traversedData;
                }

                return traverseByLevel(queue.dequeue());
            }
        }

    }


export default binaryTreeConstructor;