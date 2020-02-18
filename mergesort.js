function split(wholeArray) {
  const splitIdx = Math.floor(wholeArray.length/2);

  return [wholeArray.slice(0,splitIdx), wholeArray.slice(splitIdx)];
}

function merge(arr1, arr2){
  const newArr = [];

  let pointer1 = 0;
  let pointer2 = 0;
  let firstElem;
  let secondElem;

  while (pointer1 < arr1.length || pointer2 < arr2.length){
    firstElem = pointer1 < arr1.length ? arr1[pointer1] : null;
    secondElem = pointer2 < arr2.length ? arr2[pointer2] : null;

    if (firstElem && secondElem){
      if (firstElem > secondElem){
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

/*
1. Checking to see what each pointer value is in each array
2. Need to check if it actually exists
3. If both exist, then compare to each other and add the lesser number and move
  the pointer up
4 If only one exists, then add that element to the array and move the pointer
  up
*/
