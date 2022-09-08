import binarySearch from "./binarySearch";

describe('binary search testing',function(){
    it('on 0 elements',function(){
        let array = [];
        expect(binarySearch(array,9)).toEqual('Array empty.');
    })
    it('on 1 element',function(){
        let array = [5];
        expect(binarySearch(array,5)).toEqual('Element found at 0 index.');
        expect(binarySearch(array,1)).toEqual('Element not found.')
    })
    it('on multiple elements',function(){
        let array = [5,6,9,11,12,13,20,22];
        expect(binarySearch(array,9)).toEqual('Element found at 2 index.');
    })

})