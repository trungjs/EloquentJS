function range(start,end) {

    let rangeArray = [];

    if(start <= end) {
        for(i=start;i<=end;i++) {
            rangeArray.push(i);
        }
   }

    if(start > end) {
        for(i=start;i>=end;i--) {
            rangeArray.push(i);
        }
   }
   return rangeArray;
}

function sum(...arr) {
    let result;
    for(i=0;i<arr;i++) {
        result += arr[i];
    }
    return result;
}