function deepEqual(obj1,obj2) {
    if(obj1 == null || obj2 == null) return false;
    else if(typeof obj1 == "object" && typeof obj2 == "object") {
        let keyArr1 = Object.keys(obj1);
        let keyArr2 = Object.keys(obj2);

        if(keyArr1.length != keyArr2.length) return false;
        
        for(i=0;i<keyArr1.length;i++) {

            if(keyArr1[i] !== keyArr2[i]) return false;
            else if(keyArr1[i])
        }
        return true;
    } else if (obj1 === obj2) {
        return true;
    } else return false;
}