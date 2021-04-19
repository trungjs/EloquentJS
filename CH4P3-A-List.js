function arrayToList(arr){
    let rArr=[...arr].reverse();
    let list = {};
    for(i=0;i<arr.length;i++) {
        if(i==0) {
            list.value = rArr[i];
            list.rest = null;
        } else {
            list = {value: rArr[i], rest: list};
        }
    }
    return list;
}

function listToArray(list){
    let arr = [];
    let i=0;
    for (let node = list; node; node = node.rest) {
        arr[i] = node.value;
        i++;
    }
    return arr;
}

function prepend(num,list) {
    list = {
        value: num,
        rest: list
    }
    return list;
}

function nth(list,pos) {
    let i = 0;
    for (let node = list; node; node = node.rest) {
            if(i == pos) return node.value;
            i++;
    }
}

//recursive nth function

function nth(list,pos) {
    if (!list) return undefined;
    else if (pos == 0) return list.value;
    else return nth(list.rest, pos - 1);
}
