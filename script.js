
function action(){
 
    let position = document.getElementById('position').value;
    let number = document.getElementById('number').value;
    let arr = [23,56,11,13,15];

   for(let i = arr.length; i>=0; --i){
    if(i >= position){
        arr[i+1] = arr[i];
    }
    if(i== position){
        arr[i]= number
    } 
    
   }
   if(position >= arr.length){
    document.write("Position Not Found. ")
}else{
    document.write(arr)
}

}


//  arr.splice(3,0,555);
// console.log(arr);   