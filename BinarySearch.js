const arr = [1,2,4,5,6,7,24,28,29,34]

////////////////////// Iterative Approach /////////////////////////

function binarySearch(arr, target){
let left = 0;
let right= arr.length - 1;

while (left <= right) {
    // Once left is greater than right stop the loop
    let mid = Math.floor((left+right)/2);

    if(arr[mid] === target){
        return mid;
    }
    if(arr[mid] < target){
        left = mid + 1;
       
    }else{
        right = mid - 1;
        
    }
}
return -1;
}
const result = binarySearch(arr, 24);
console.log(result);

////////////////////// Recursive Approach /////////////////////////
 
function BinarySearch(arr, left, right, target){
    if(left <= right){
    let mid = Math.floor((left + right)/2);
    
    if(arr[mid] === target){
        return mid;
    }
    if(arr[mid] < target){
        return BinarySearch(arr, mid+1, right, target);
    }else{
        return BinarySearch(arr, left, mid - 1, target);
    }
}
}
const res = BinarySearch(arr, 0, arr.length - 1, 29)
console.log("Rec Result :- ", res);