function split(wholeArray) {
  const splitIdx = Math.floor(wholeArray.length/2);

  return [wholeArray.slice(0,splitIdx), wholeArray.slice(splitIdx)];
}

function merge(arr1, arr2, func){
  const newArr = [];

  let pointer1 = 0;
  let pointer2 = 0;
  let firstElem;
  let secondElem;
  let result;


  while (pointer1 < arr1.length || pointer2 < arr2.length){
    firstElem = pointer1 < arr1.length ? arr1[pointer1] : null;
    secondElem = pointer2 < arr2.length ? arr2[pointer2] : null;

    if (firstElem && secondElem){
      if (func){
        result = func(firstElem, secondElem);
      }
      else {
        result = firstElem > secondElem
      }

      if (result > 0){
        newArr.push(secondElem);
        pointer2++;
      }
      else {
        newArr.push(firstElem);
        pointer1++;
      }
    }
    else if (firstElem){
      newArr.push(firstElem);
      pointer1++;
    }
    else if (secondElem){
      newArr.push(secondElem);
      pointer2++;
    }
  }
  return newArr;
}

function mergeSort(array, func) {
  if (array.length === 1){
    return array;
  }
  else {
    const splitArr = split(array);
    const resultArr = splitArr.reduce((arr, elem) =>{
      arr.push(mergeSort(elem, func));
      return arr;
    }, []);

    array = merge.apply(null, [...resultArr, func]);
  }

  return array;
}
