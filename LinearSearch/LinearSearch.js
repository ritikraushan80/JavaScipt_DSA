let arr = [23, 11, 32, 54, 53, 10, 40, 19, 36, 99, 25];
let array = document.getElementById('array')
array.innerHTML = arr;
function getPosition() {
  
    let number = document.getElementById('index').value;
    let res = document.getElementById('result');
    let index = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == parseInt(number)) {
            index = i;
            break;
        }
    }
     
    if (arr[index] == number) {
        let result = `Result: ${number} is ${index + 1}th Index. `
        res.innerHTML = result;
        console.log(result)
    } else {
        let err = 'Oops: Data Not Found';
        console.log(err);
        res.innerHTML = `Result:- ${err}`;
    }
}

/*
 /////////////////////////////////////// Linear Search ////////////////////////////////////

 
function linearSearch(arr, num){
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] ==  num) {
            index = i;
            break;
        }
    }

    if (arr[index] == num) {
        let result = index;  
        console.log(result)
    }else{
        console.log("data not Found")
    }
}

let arr = [1, 11, 32, 54, 53, 10, 40];
linearSearch(arr, 54 )



//////////////////////////////////// Binary search ///////////////////////////////////////

function binarySearch(arr, left, right, target){
    if(right >= left){
        mid = left + Math.floor((right-1)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid] > target){
            return binarySearch(arr, left, mid -1, target);
        }
        return binarySearch(arr, mid + 1,right, target);
    }
    return -1
}

let arr = [4,6,23,26,76,89];
let target = 23;
let result = binarySearch(arr, 0, arr.length, target);
console.log(result);

*/
