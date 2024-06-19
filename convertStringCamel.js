function toCamelCase(str){
    let separators=['-','_'];
let newstr= str.split('').map((el,index,arr)=> separators.includes(arr[index-1]) ? el.toUpperCase() : el).join('')
return newstr.replace(/[_-]/g,'')
}