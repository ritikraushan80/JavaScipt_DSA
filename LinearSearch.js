const arr = [3,6,2,4,7,5,2,9];
const target = 5;
 
// Iteration Approach
const indexes =[]
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target){
        console.log('Index of element :-', i+1);
            indexes.push(i)// Global Linear search
    }    
}

console.log(indexes);



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
        console.log(result+1)
    }else{
        console.log("data not Found")
    }
}

 
linearSearch(arr, 4 )


/////////////////////// Recursive Approach /////////////////////////

function LinearSearch(arr,target,count) {
    if(arr[count] === target){
        return count;
    }

    if (arr.length-1 === count) {
       return -1; 
    }
   return LinearSearch(arr, target, count+1);
}
const result = LinearSearch(arr, target,0);
console.log("result", result+1);

