function oddNotPrime(n){
   var isNotPrime=[];
   for(var y=1;y<=n;y+=2){
      if(y===1){
          isNotPrime.push(y);
      }
      else{
     for(var d=2;d<y-1;d++){ // check if each number is prime starting from 2 
     if(y%d===0){
             isNotPrime.push(y);
            break;
         }
     }
   } 
}
return  isNotPrime.length;
}
