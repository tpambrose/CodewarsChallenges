function solution(str){
    if(str.length===0) return []
   let newArr=str.split('')
    
   let result=[];
   
   for(let i=0;i<newArr.length;i+=2){

       if(newArr.length%2!==0){
           newArr.push('_')
       }
       
   let pair=newArr.slice(i,i+2).join('')
   
   result.push(pair)
   }
 return result 
}