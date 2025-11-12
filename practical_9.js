function sum_of_Array(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arr = [10, 20, 23 ,45,234]

console.log("The Sum of array element : ", sum_of_Array(arr));