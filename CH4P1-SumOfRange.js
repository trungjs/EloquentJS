function range(start,end) {
    let rangeArray = []
    for(i=0;i<end;i++) {
        rangeArray[i] = start + i;
    }
    return rangeArray;
}

function sum(...numbers) {
    let result;
    for(i=0;i<numbers.length;i++) {
        result += numbers[i];
    }
}

function range(start,end,step=1) {
    let rangeArray=[];
    if(start<end) {
        for(i=0;i<end;i++) {
            rangeArray.push(start+i);

        }
        return rangeArray;
    } else if(start>end) {
        for(i=0;i<start;i++) {
            rangeArray.push(start-i);
        }
    } else {
        rangeArray.push(start);
        return rangeArray;
    }

}

   