function swap(elem1, elem2){
  const temp = elem2;
  elem2 = elem1;
  elem1 = temp;

  return [elem1, elem2];
}

function bubbleSort(array, func){

  let counter = array.length-1;
  let newArr = [...array];

  while (counter > 0){
    let complete = true;
    for (let i=0; i < counter; i++){

      if (func) {

        const funcResult = func(newArr[i], newArr[i+1])
        if (funcResult > 0) {
          const result = swap(newArr[i], newArr[i+1])
          newArr[i] = result[0];
          newArr[i+1] = result[1];
          complete = false;
        }
      }
      else {
        if (newArr[i] > newArr[i+1]){
          const result = swap(newArr[i], newArr[i+1]);
          newArr[i] = result[0];
          newArr[i+1] = result[1];
          complete = false;
        }
      }

    }

    if (complete) break;

    counter--;
  }

  return newArr;
}
