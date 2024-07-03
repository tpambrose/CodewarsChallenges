function squareSum(numbers){
    if(numbers.length==0) return 0;
  return numbers.reduce((acc,curr)=>acc+=(curr*curr),0)
  }