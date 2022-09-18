let arr1 = [1,3,5,2,6,7,8];
let arr2 = [10,13,28,54,34];
let res = [];

for(let i=0; i<=arr1.length-1; i++){
   res.push(arr1[i])
}
for(let j =0; j<= arr2.length-1; j++){
    res[arr1.length+j]= arr2[j]
}
console.log(res); 