function differenceOfSquares(n) {
    let sum=0
    let squaredsum=0
     for(let i=1;i<=n;i++){
       squaredsum+=i*i
       sum+=i
       
       console.log(sum)
       }
    return (sum*sum)-squaredsum
   }