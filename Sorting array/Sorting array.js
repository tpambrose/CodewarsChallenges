function sortArray(a1, a2) {
   const sortedArray=[];
    for (let i = 0; i < a1.length; i++) {
  const item_1 = a1[i];
  for (let j = 0; j < a2.length; j++) {
    const item_2 = a2[j];
    if (item_1[0] === item_2[0]) {
      sortedArray.push(item_2);
    }
  }
}
  return sortedArray;
  }
