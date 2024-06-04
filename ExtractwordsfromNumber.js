function extractWordsAndNumbers(arr){
    let letters='';
    let numbers='';
    let newArray=[];

    arr.forEach(element=>{
        element.split('').forEach(char=>{

            Number(char)? numbers+=char:letters+=char
        });
        newArray.push(letters);
        newArray.push(parseInt(numbers));
        letters='';
        numbers='';
    });
    return newArray.filter((elt)=>elt!=='')
}
console.log(extractWordsAndNumbers(["Hello123", "World456", "49", "Another789"]));