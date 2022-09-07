import React from 'react';

function HomeAlgorithmsSection() {
    return (
        <div className='home-algorithms-section'>
            <h1 className='home-section-main-h1'>Algorithms</h1>
            <div className='sorting-algorithms'>
                <h3>Sorting algorithms</h3>
                <div className='a-text'>
                    The first algorithms worth knowing about are sorting algorithms.
                    There are a lot of sorting algorithms. Some of them work on only linear data(example - arrays), some of work on 
                    non-linear data, and some on both. Here are some sorting algorithms examples:
                    <ul>
                        <li><strong>Bubble sort</strong>     - iterates through an array and replaces elements in order.</li>
                        <li><strong>Selection sort</strong>  - finds the minimum element in an array, put it at a new array. Repeats.</li>
                        <li><strong>Merge sort</strong>      - uses Divide and Conquer aproach. Splits data into smaller peaces, then compares those peaces and merges them back together. </li>
                        <li><strong>Tree sort</strong>       - turns a linear data structure to a binary search tree and traverses it.</li>
                    </ul>
                    Now, some sorting algorithms more in depth.
                    <div className='bubble-sort'>
                        <h5>Bubble sort</h5>
                        <span>Bubble sort is the most primitive sorting algorithm. It iterates through elemenets and replaces them if they dont match
                            the criteria of sorting(sorting ascendingly or descendingly).
                            Going more in depth, here are the pluses and minuses of bubble sort:
                            <h6>Positives</h6>
                            <ul>
                                <li>Very simple to implement.</li>
                                <li>Sorts it in the original array, therefore minimal space expanditure.</li>
                            </ul>
                            <h6>Negatives</h6>
                            <ul>
                                <li>Uses nested loops, therefore is slow with big amounts of data.</li>
                            </ul>
                            <h6>Big O notation</h6>
                            Big O notation is an important aspect of algorithms - it shows how efficient it is in time and space ways.
                            This notation is expressed as O(x), where x is the given data number, which is often refered as n.
                            The time complexity for bubble sort is O(n*n). It nested loops, therefore, worst case scenario, it will have to loop
                            through the data twice.
                            Space complexity for buble sort is O(1) - it does not need any more allocated space, it changes the original array.<br></br>
                            <strong><em>Time complexity: O(n*n)</em></strong><br></br>
                            <strong><em>Space complexity: O(1)</em></strong>
                        </span>

                            <h6>Bubble sort in javscript</h6>
                            <img src={require('../Photos/bubbleSort.png')} width='100%' height='auto' alt='bubble-sort-javascript'></img>
                    </div>
                </div>
            </div>
            <div className='queues'>

            </div>
            <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeAlgorithmsSection;