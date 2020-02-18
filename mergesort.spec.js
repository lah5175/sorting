describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    const arr = [1,2,3,4,5];
    expect(split(arr)).toEqual([[1,2],[3,4,5]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    const arr1 = [1,2,3,4];
    const arr2 = [5,6,7,8];

    expect(merge(arr1, arr2)).toEqual([1,2,3,4,5,6,7,8])
  });
});

describe('mergeSort function', function(){
  it('is able to merge two unsorted arrays into one sorted array', function(){
    const arr1 = [4,2,1,3,7,5,6,8];

    expect(mergeSort(arr1)).toEqual([1,2,3,4,5,6,7,8])
  });
});
