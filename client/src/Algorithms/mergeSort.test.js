import mergeSort from "./mergeSort";

describe('tests for merge sort',function(){
    it('merge sort on 0 elements',function(){
        const array = [];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([]);
    })
    it('merge sort on 1 element',function(){
        const array = [5];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([5]);
    })
    it('merge sort on unequal number of elements',function(){
        const array = [8,7,6,3,2,9,15,12,16];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([2,3,6,7,8,9,12,15,16])
    })
    it('merge sort on equal number of elements',function(){
        const array = [10,15,13,5,6,9,17,16,19];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([5,6,9,10,13,15,16,17,19])
    })
})