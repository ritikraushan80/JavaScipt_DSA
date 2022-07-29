
function removeIndex(){
 let result = document.getElementById('result')
const arr = [10,34,23,65,57,98,35]; 
let index = document.getElementById('index').value;
index = parseInt(index);
for(let i = index; i<arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr.length = arr.length-1;
 result.innerHTML = arr;
 console.log(arr);
}