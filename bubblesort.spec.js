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
});
