import bubbleSort from "./bubbleSort";

describe('Bubble sort algorithm tests',function(){
    it('0 elements',function(){
        const array = [];
        expect(bubbleSort(array)).toEqual([]);
    })
    it('1 element',function(){
        const array = [1];
        expect(bubbleSort(array)).toEqual([1]);
    })
    it('multiple elements',function(){
        const array = [2,3,7,4,1,15,17,10];
        expect(bubbleSort(array)).toEqual([1,2,3,4,7,10,15,17]);
    })
})