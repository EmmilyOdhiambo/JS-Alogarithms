//Given an array of unsorted numbers, return the index of the following target if the target exists in the array.
//If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 250
function divisionArays(nums){
    if (nums.length <= 1){
        return nums; 
    }
    let middle = Math.floor(nums.length /2)
    let left = nums.slice(0,middle);
    let right = nums.slice(middle);
    return sortedArray(divisionArays(left),divisionArays(right));
}
function sortedArray(left,right){
     emptyArray = [];
    while (left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift());
        }
    }
    return[...emptyArray,...left,...right]
}
let num = [425,625,600,222,223,100,250];
let taget=250
let sorted=divisionArays(num)
console.log(sorted)

//#Targeting a value[250]
function binary(nums,target){
    let left = 0
    let right = num.length -1
    while(left<=right){
       let  middle  = Math.floor((left+right )/2)
        if(num[middle]===target){
        return middle
    }
    else if(num[middle]<target){
        left = middle +1
     }
    else{
        right = middle -1
    }
}
    return null
}

let target = 250;
console.log(binary(sorted,target));


//Given an unsorted array of numbers return the sorted array in descending order
function mergeSort(numbers){
    if (numbers.length <= 1){
        return numbers; 
    }
    let middle = Math.floor(numbers.length /2)
    let left = numbers.slice(0,middle);
    let right = numbers.slice(middle);
    return sortedArray(divisionArays(left),divisionArays(right));
}
function sortedArray(left,right){
     emptyArray = [];
    while (left.length && right.length){
        if(left[0]>right[0]){
            emptyArray.push(left.shift());
        }else{
            emptyArray.push(right.shift());
        }
    }
    return[...emptyArray,...left,...right]
}
const numbers = [67,78,89,39,90,45]
console.log(mergeSort(numbers));

    

