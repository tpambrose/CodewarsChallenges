function countFeelings(string, array) {
    let count=0;
    
  array.forEach(elt=>{
     let isIncluded= elt.split('').every(char => string.includes(char));
       if( isIncluded) return count++
  })
   return count==1 ?  `${count} feeling.` : `${count} feelings.`
  }