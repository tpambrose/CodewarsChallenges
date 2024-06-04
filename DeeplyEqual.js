function  deeplyEqual(arr1,arr2){
if(arr1.length!==arr2.length){
    return false 

}
return arr1.every((item,index)=>{
   return JSON.stringify(item)===JSON.stringify(arr2[index])
})

}
const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];
console.log(deeplyEqual(array1,array2));