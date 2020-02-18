describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    const arr = [1,2,3,4,5];
    expect(split(arr)).toEqual([[1,2],[3,4,5]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    arr1 = [1,2,3,4];
    arr2 = [5,6,7,8];

    expect(merge(arr1, arr2)).toEqual([1,2,3,4,5,6,7,8])
  });
});
