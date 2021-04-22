function every(arr, test) {
    for(element of arr) {
        if(!test(element)) return false; 
    }
    return true;
}

function every(arr, test) {
    return !arr.some(element => !test(element));
}