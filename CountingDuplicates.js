function duplicateCount(text){
    let repChar=[];
let newtext= text.toLowerCase().split('').sort();
for(let i=0;i<=newtext.length-1;i++){
if (newtext[i]==newtext[i+1]){
    repChar.push(newtext[i])
  }
 }
let finalarr=new Set(repChar)
  return finalarr.size
}