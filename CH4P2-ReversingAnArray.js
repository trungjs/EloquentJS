function reverseArray(arr){
    let rArr={};
    for(i=0;i<arr.length;i++) {
        rArr.unshift(arr[i]);
    }
    return rArr;
}

reverseArrayInPlace = (arr) => {
    for(i=0;i<Math.floor(arr.length/2);i++) {
        let num1 = arr[i];
        let num2 = arr[arr.length-1-i];
        arr[i] = num2;
        arr[arr.length-1-i] = num1;
    }
    return arr;
}