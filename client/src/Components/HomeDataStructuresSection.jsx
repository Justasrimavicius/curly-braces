import React from 'react';

require('../Photos/Stacks.png')

function HomeDataStructuresSection() {



    return (
        <div className='home-dataStructures-section'>
            <h1 className='home-section-main-h1'>Data structures</h1>
            <div className='linear-ds'>
                <div className='stacks'>
                    <h3>Stacks</h3>
                    <div className='stacks-text'>
                        Stacks are one of the two main data structures, that everyting else is built on in CS. A great analogy
                        for them is a stack of books: When you stack books one on top of the other, you take it out from the top - 
                        stacks are based on First In Last Out principle.
                    </div>
                    <h6>Implementation</h6>
                    <div className='stacks-text'>
                        Stacks in javascript can be basic arrays. They have these functions: push(), pop(), peek(), isEmpty() and printStack().
                        Check out how all of them look like in a class constructor:
                        <img src={require('../Photos/Stacks.png')} height='500px' width='100%'></img>
                        <h6>Testing of this stack implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/dataStructures/Stacks.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/dataStructures/Stacks.test.js</a></h6>
                    </div>
                </div>
                <div className='queues'>
                    <h3>Queues</h3>
                    <div className='queues-text'>
                        Queues are another very important data structure for understanding CS. they work based on First in First out principle.
                        A cinema queue is an amazing analogy for queues - the first person that comes to the line gets served.
                    </div>
                    <h6>Implementation</h6>
                    <div className='queues-text'>
                        Queues in javascript can also, just like stacks, be basic arrays. They have these functions: enqueue(), dequeue(), peek(), isEmpty().
                        Check out how all of them look like in a class constructor:
                        <img src={require('../Photos/Queues.png')} height='500px' width='100%'></img>
                        <h6>Testing of this stack implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/dataStructures/Queues.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/dataStructures/Stacks.test.js</a></h6>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeDataStructuresSection;