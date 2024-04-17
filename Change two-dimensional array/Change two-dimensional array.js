function matrix(array){
    for(var i=0;i<array.length;i++){

        for(var y=0;y<array[i].length;y++){
            if(i===y){
                array[i][y]<0? array[i][y]=0:array[i][y]=1;
            }
}
}
return array;
}
var inputArray = [
 [-1, 4, -5, -9, 3],
 [6, -4, -7, 4, -5],
 [3, 5, 0, -9, -1],
 [1, 5, -7, -8, -9],
 [-3, 2, 1, -5, 6]
];

console.log(matrix(inputArray));
