class Group {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    delete(value) {
        this.arr.slice(arr.indexOf[value],1);
    }

    has(value) {
        for(let element of this.arr) {
            if (element === value) return true;
        }
    }
}