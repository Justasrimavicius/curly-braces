import React from 'react';

require('../Photos/Stacks.png')

function HomeDataStructuresSection() {



    return (
        <div className='home-dataStructures-section'>
            <h1 className='home-section-main-h1'>Data structures</h1>
            <div className='linear-ds'>
                <div className='stacks'>
                    <h3>Stacks</h3>
                    <div className='ds-text'>
                        Stacks are one of the two main data structures, that everyting else is built on in CS. A great analogy
                        for them is a stack of books: When you stack books one on top of the other, you take it out from the top - 
                        stacks are based on First In Last Out principle.
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        Stacks in javascript can be basic arrays. They have these functions: push(), pop(), peek(), isEmpty(), printStack().
                        Check out how all of them look like in a class constructor:
                        <img src={require('../Photos/Stacks.png')} height='auto' width='100%' alt='stacks-implementation'></img>
                        <h6 className='testing-h6'>Testing of this stack implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Stacks.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Stacks.test.js</a></h6>
                    </div>
                </div>
                <div className='queues'>
                    <h3>Queues</h3>
                    <div className='ds-text'>
                        Queues are another very important data structure for understanding CS. they work based on First in First out principle.
                        A cinema queue is an amazing analogy for queues - the first person that comes to the line gets served.
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        Queues in javascript can also, just like stacks, be basic arrays. They have these functions: enqueue(), dequeue(), peek(), isEmpty().
                        Check out how all of them look like in a class constructor:
                        <img src={require('../Photos/Queues.png')} height='auto' width='100%' alt='queues-implementation'></img>
                        <h6 className='testing-h6'>Testing of this queue implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Queues.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Queues.test.js</a></h6>
                    </div>
                </div>
                <div className='linked-lists'>
                    <h3>Linked lists</h3>
                    <div className='ds-text'>
                        Linked lists are a bit different than previous data structures mentioned. They are a linear series of data, called nodes,
                        with a pointer to the next node. An analogy for linked lists is a treasure hunt - you start by having a hint which leads
                        to the next clue - just like a node leads to the next node.
                        <strong> The start of a linked list is called a HEAD. it then points to a node, which contains data and a link to another node.
                        </strong>
                            <p style={{marginTop:'10px'}}>
                            When the end is reached, the last node points to NULL.
                            There are 3 variants of linked lists: singly linked, doubly linked and circular. Singly linked lists can point to only the following node,
                            doubly linked lists, you guessed it, can point to the next node and to the previous node, and circular lists last node points to the beginning.
                            In the implementation code below, only the singly linked list is shown.
                            </p>
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        Implementation of a linked list is a bit complicated because of it not having indexes. A linked list should have inserting
                        and deleting functions at head and at given indexes:
                        <img src={require('../Photos/linkedLists1.png')} height='auto' width='100%' alt='linked-lists-implementation1'></img>
                        <img src={require('../Photos/linkedLists2.png')} height='auto' width='100%' alt='linked-lists-implementation2'></img>
                        <h6 className='testing-h6'>Testing of this linked list implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Queues.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/linkedLists.test.js</a></h6>
                    </div>
                </div>
            </div>
        <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeDataStructuresSection;