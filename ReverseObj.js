let reversedObj=(obj)=>{
    let newObj={}
    Object.entries(obj).forEach(elt=>newObj[elt[1]]=elt[0])

    return newObj;
}

console.log(reversedObj({aa: "1", bf: "3", cq: "5"}));