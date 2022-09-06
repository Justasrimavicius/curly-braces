import React from 'react';
import binaryTreeConstructor from '../DataStructures/binaryTrees';

function LevelOrderTraversal() {
    return (
        <div className='aligning-div'>
            <div className='level-order-traversal-explanation'>
                <h3>Level order traversal</h3>
                <div>
                    <strong>Recap:</strong><br></br>
                    The circles below are nodes. They point to either left, right or nothing.<br></br>
                    A node contains data, a pointer to left and a pointer to right.<br></br>
                    <strong>Color meanings:</strong><br></br>
                    <em style={{textDecoration:'underline'}}>Orange</em> color means the node has been stored in a queue.<br></br>
                    <em style={{textDecoration:'underline'}}>Green</em> color means the node has been read(data is outputed).<br></br>
                    The steps of a level order traversal are as follows:
                    <ol>
                        <li>Go to root node. Read the root node.</li>
                        <li>Store left node, store right node.</li>
                        <li>Read the root node, left(first added) node from queue, store its left and right nodes in queue.</li>
                        <li>Read the right(second added) node from queue, store its left and right nodes in queue.</li>
                        <li>Repeat the reading data from node and storing its left and right nodes.</li>

                    </ol>
                </div>
            </div>
            <div className='level-order-traversal'>
                <div className='level-order-traversal-data-visualisation'>
                <div className='queue'>
                        <div className='queue-1 queue-block'></div>
                        <div className='queue-2 queue-block'></div>
                        <div className='queue-3 queue-block'></div>
                        <div className='queue-4 queue-block'></div>
                        <div className='queue-5 queue-block'></div>
                        <div className='queue-6 queue-block'></div>
                    </div>
                </div>
                <div className='binary-tree'>
                    <div className='level0'>
                        <div className='root'>20</div>
                    </div>
                    <div className='level1'>
                        <div className='left-subtree'>10</div>
                        <div className='right-subtree'>30</div>
                    </div>
                    <div className='level2'>
                        <div className='left left-subtree'>3</div>
                        <div className='right left-subtree'>15</div>
                        <div className='left right-subtree'>25</div>
                        <div className='right right-subtree'>35</div>
                    </div>
                    <div className='level3'>
                        <div className='left left-subtree left-left-subtree'>1</div>
                        <div className='right left-subtree left-left-subtree'>4</div>
                        <div className='left left-subtree left-right-subtree'>12</div>
                        <div className='right left-subtree left-right-subtree'>17</div>
                        <div className='left right-subtree right-left-subtree'>22</div>
                        <div className='right right-subtree right-left-subtree'>27</div>
                    </div>
                    <button onClick={()=>{
                        // let binaryTree = new binaryTreeConstructor();
                        // binaryTree.insert(20);
                        // console.log('-----------')
                        // binaryTree.insert(10);
                        // binaryTree.insert(30);
                        // binaryTree.insert(15);
                        // binaryTree.insert(25);
                        // binaryTree.insert(7);
                        // binaryTree.insert(55);
                        // binaryTree.insert(1);
                        // binaryTree.insert(22);

                        // console.log(binaryTree);

                    }}>Start traversing</button>
                </div>
        

            </div>
        </div>

    );
}

export default LevelOrderTraversal;