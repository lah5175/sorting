describe('Bubble Sort', function(){

  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough();
  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('can handle an array with one element', ()=>{
    expect(bubbleSort([2])).toEqual([2]);
  })

  it('can handle an array with multiple elements', ()=>{
    expect(bubbleSort([4,2,3,1])).toEqual([1,2,3,4]);
  })

  it('swaps the correct number of times', ()=>{
    expect(swap.calls.count()).toEqual(5);
  })

  it('works with a function input', ()=>{
    expect(bubbleSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }], (function comparator (a, b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    }))).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }])
  })
});
