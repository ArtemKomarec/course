function treeSum(array){
for(let i = 0; i < array.length ; i++)
{
    if(Array.isArray(array[i])){
        treeSum(array[i]);
    }
    else{
        sum += array[i];
    }
}
return sum;
}

var array = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];
 sum = 0;
 alert(treeSum(array));
