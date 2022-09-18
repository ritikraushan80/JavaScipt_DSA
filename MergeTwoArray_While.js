let arr1 = [3,7,12,34,56,90,85,50];
let arr2 = [4,9,25,45,60,68,95,100,350];
let result = [];
let a1=0, a2 =0 ,res=0;
while(a1 < arr1.length && a2 < arr2.length){
    if(arr1[a1]<arr2[a2]){
        result[res] = arr1[a1]
        a1++; 
        console.log(result[res]);
    }else {
        result[res] = arr2[a2];
        a2++; 
        console.log(result[res]);
    }
    res++;
    }

    while(a1<arr1.length){
        result[res] = arr1[a1];
        a1++;
        res++;
    }
    while(a2<arr2.length){
        result[res] = arr2[a2];
        a2++;
        res++;
    }
    console.log(result);
    
