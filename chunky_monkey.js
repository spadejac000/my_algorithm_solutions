function chunkArrayInGroups(arr, size) {
  let subArr = [];
  while(arr.length > 0) {
    for(let i = 0; i < size; i++) {
      if(i === size - 1) {
        subArr.push(arr.slice(0, size))
        arr.splice(0, size);
      }
    }
  }
  return subArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);