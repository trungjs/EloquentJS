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

//solution with optional step

function range(start,end,step=1) {

    let rangeArray = [];

    if(start <= end) {
        for(i=start;i<=end;i+=Math.abs(step)) {
            rangeArray.push(i);
            
        }
   }

    if(start > end) {
        for(i=start;i>=end;i-=Math.abs(step)) {
            rangeArray.push(i);
        }
   }
   return rangeArray;
}
