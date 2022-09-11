import React from 'react';

function HomeComparisonSection() {
    return (
        <div className='home-comparison-section'>
            <h1 className='home-section-main-h1'>Speed comparison of algorithms</h1>
            <h6>Whats a better way of visualising why certain algorithms are better then others if not by comparing them?</h6>
            <span>All of the tests were done 5 times and the average was taken. The time shown depends on a lot of factors, therefore it should be taken 
                with a grain of salt.
            </span>
            <h5>Here are some comparisons of algorithms and data structures</h5>
<div className='divider-fullWidth'></div>
            <div className='comparison bubble-merge'>
                <div className='comparison-division'>
                    <div className='comparison-elementSize'>
                        <h4>Data size</h4>
                        <h6>100k elements:</h6>
                        <h6>200k elements:</h6>
                        <h6>300k elements:</h6>
                        <h6>400k elements:</h6>
                        <h6>500k elements:</h6>
                    </div>
                    <div className='comparison-mergeSort'>
                        <h4>Merge sort time</h4>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest100k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest200k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest300k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest400k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest500k.png')}></img>
                    </div>
                    <div className='comparison-bubbleSort'>
                        <h4>Bubble sort time</h4>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest100k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest200k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest300k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest400k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest500k.png')}></img>
                    </div>
                </div>
            </div>
<div className='divider-fullWidth'></div>
            <div className='comparison bubble-merge'>
                <div className='comparison-division'>
                    <div className='comparison-elementSize'>
                        <h4>Data size</h4>
                        <h6>100k elements:</h6>
                        <h6>200k elements:</h6>
                        <h6>300k elements:</h6>
                        <h6>400k elements:</h6>
                        <h6>500k elements:</h6>
                    </div>
                    <div className='comparison-mergeSort'>
                        <h4>Merge sort time</h4>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest100k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest200k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest300k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest400k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/mergeSort/mergeSortTest500k.png')}></img>
                    </div>
                    <div className='comparison-bubbleSort'>
                        <h4>Bubble sort time</h4>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest100k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest200k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest300k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest400k.png')}></img>
                        <img src={require('../Photos/comparisonPhotos/bubbleSort/bubbleSortTest500k.png')}></img>
                    </div>
                </div>
            </div>
        <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeComparisonSection;