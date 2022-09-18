const arr = [1,2,3,6,8,9,10,11,14];

function ternarySearch(arr, target) {
    let left =0;
    let right = arr.length -1;

    while (left <= right) {
        let mid1 =  left + Math.floor((right - left)/3);
        let mid2 =  right - Math.floor((right - left)/3);

        if(arr[mid1] === target){
            return mid1;
        }
        if (arr[mid2] === target) {
            return mid2;
        }
        if(arr[mid1] >  target){
            right = mid1 - 1;
        }else if(arr[mid2] < target){
            left = mid2 + 1;
        }else{
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;
}
const  result  = ternarySearch( arr, 14);
console.log(result);